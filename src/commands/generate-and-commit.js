/// @ts-check
const generate = require('../generate-typescript-annotations');
const git = require('../git');
const NodeGit = require('nodegit');
const crypto = require('crypto');
const fs = require('fs-extra');
const YError = require('yargs/lib/yerror');
const path = require('upath');
const util = require('../util');
const glob = require('glob');

exports.command = 'generate-and-commit [out-dir] [out-branch] [dir]';
exports.desc =
  'Generate definitions for p5 commit(s) and commit them to this repo';

exports.builder = {
  dir: {
    type: 'string',
    default: path.joinSafe(__dirname, '../../p5'),
    describe: 'Root directory for p5.js repository'
  },
  commit: {
    type: 'string',
    describe: 'Commit or reference in p5.js repository'
  },
  range: {
    type: 'string',
    describe: 'Commit range in p5.js repository'
  },
  'tag-range': {
    type: 'string',
    describe:
      'Range of tags in p5.js repository (* = unconstrained, *..tag and tag..* works too)'
  },
  'out-branch': {
    type: 'string',
    default: randomBranchName(),
    describe: 'Branch to commit definition files to'
  },
  'repo-dir': {
    type: 'string',
    default: path.joinSafe(__dirname, '../../'),
    describe: 'Root directory of git repository to commit definition files to'
  },
  'out-dir': {
    type: 'string',
    default: 'generated',
    describe:
      'Directory in repo to put generated files in (destructively modified)'
  },
  npm: {
    type: 'string',
    default: 'npm',
    describe: 'name of npm command (or yarn)'
  },
  npx: {
    type: 'string',
    default: 'npx',
    describe: 'name of npx command'
  },
  silent: {
    type: 'boolean',
    describe: 'Suppress status messages',
    default: false
  },
  logname: {
    type: 'string',
    default: 'generated/log.txt',
    describe: 'Relative path for the definition generation logfile'
  }
};

function randomBranchName() {
  const length = 10;
  return `generated-${util.getCurrentISO8601Date()}-${crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .substring(0, length)}`;
}

async function getCommits(repo, args) {
  const range = args.range;
  const commitName = args.commit;
  const log = !args.silent;
  const tagRange = args['tag-range'];
  const specified = [
    { v: range, s: 'range' },
    { v: commitName, s: 'commit' },
    { v: tagRange, s: 'tag-range' }
  ].filter(o => o.v);
  if (specified.length > 1) {
    throw new YError(
      `Multiple input selectors (${specified
        .map(o => o.s)
        .join(', ')}) were specified, need to specify exactly one`
    );
  } else if (specified.length === 0) {
    throw new YError(
      'None of the commit, range or tag-range options were specified, need to specify exactly one'
    );
  }

  if (commitName) {
    const resolvedCommit = await git.resolveIdentifierByName(repo, commitName);
    const commit = resolvedCommit.commit;
    return [
      {
        source: commit.toString(),
        commit: commit
      }
    ];
  }
  if (range) {
    const commits = await git.getCommitRange(repo, range, log);
    return commits.map(commit => ({
      source: commit.toString(),
      commit: commit
    }));
  }
  if (tagRange) {
    const tags = await git.getTagRange(repo, tagRange, log);
    return git.getCommitForTags(repo, tags, log);
  }
}

function createFileLogger(filename) {
  const fd = fs.openSync(filename, 'w');
  const emit = function(...texts) {
    fs.writeSync(fd, texts.join(', ') + '\n');
  };

  emit.close = function() {
    fs.closeSync(fd);
  };

  return emit;
}

exports.handler = async args => {
  const log = !args.silent;
  const dir = args.dir;
  const repoDir = args['repo-dir'];
  const outDirRelative = args['out-dir'];
  const outDirFull = path.join(repoDir, args['out-dir']);
  const logRelative = args.logname;
  const logFull = path.joinSafe(repoDir, logRelative);
  const data = path.joinSafe(dir, 'docs/reference/data.json');
  const npm = args.npm;
  const npx = args.npx;
  const outBranchName = args['out-branch'];
  try {
    util.conditionalLog(log, `Opening p5-repo ${dir}`);
    const repo = await git.openRepository(dir);
    util.conditionalLog(log, `Opening out-repo ${repoDir}`);
    const outRepo = await git.openRepository(repoDir);
    const commits = await getCommits(repo, args);
    const sig = git.defaultSignature(outRepo);
    util.conditionalLog(
      log,
      `Ensuring ${outBranchName} branch exists in out-repo`
    );
    const outBranch = await git.getOrCreateBranch(
      outRepo,
      outBranchName,
      'new-branch-base'
    );
    const fullOutName = outBranch.name();
    let latestId = outBranch.target();
    util.conditionalLog(
      log,
      `Processing ${util.pluralize(commits.length, 'commit', 'commits')}...`
    );
    const errors = [];
    const index = await outRepo.refreshIndex();
    const originalTreeId = await index.writeTree();
    const originalTree = await git.lookupTree(outRepo, originalTreeId);
    await fs.ensureDir(outDirFull);
    for (let resolvedCommit of commits) {
      try {
        let logger;
        let success = false;
        try {
          util.conditionalLog(log, `Checking out ${resolvedCommit.source}`);
          await git.resetToCommit(repo, resolvedCommit.commit, log);
          util.conditionalLog(
            log,
            `Running ${npm} install to update p5.js dependencies`
          );
          await util.npmInstall(dir, npm);
          util.conditionalLog(log, 'Building YUIDoc');
          await util.npmRun('grunt -- yuidoc', dir, npx);
          util.conditionalLog(log, 'Generating definition files');
          logger = createFileLogger(logFull);
          generate({
            outdir: outDirFull,
            data: data,
            logger: logger
          });
          success = true;
        } catch (e) {
          if (logger) {
            logger(e);
            logger.close();
          }
          util.conditionalLog(log, e);
          errors.push(e);
        }
        const latestCommit = await outRepo.getCommit(latestId);
        const baseTree = await latestCommit.getTree();
        index.readTree(baseTree);
        if (success) {
          const generatedFiles = await glob.sync(
            path.joinSafe(outDirRelative, '**/*.d.ts')
          );
          await Promise.all(generatedFiles.map(file => index.addByPath(file)));
        }
        await index.addByPath(logRelative);
        await index.write();
        const tree = await index.writeTree();
        latestId = await outRepo.createCommit(
          fullOutName,
          sig,
          sig,
          `Add definitions for ${resolvedCommit.source}`,
          tree,
          [latestId]
        );
        util.conditionalLog(log, `Created commit ${latestId}`);
        index.clear();
      } catch (e) {
        util.conditionalLog(log, e);
        errors.push(e);
      }
    }
    await fs.emptyDir(outDirFull);
    await index.readTree(originalTree);
    await index.write();
    util.conditionalLog(
      errors.length === 0 && log,
      'Done without critical errors'
    );
    util.conditionalLog(
      errors.length > 0 && log,
      `Done with ${util.pluralize(
        errors.length,
        'critical error',
        'critical errors'
      )}`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
