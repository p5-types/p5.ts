const fs = require('fs-extra');
const NodeGit = require('nodegit');
const gitRange = require('git-range');
const semver = require('semver');
const util = require('./util');

async function setBranchTo(repo, branch, source) {
  const reference = await getOrCreateBranch(repo, branch, source);
  const sourceReference = await NodeGit.Reference.lookup(repo, source);
  return reference.setTarget(
    sourceReference.target(),
    `setBranchTo: moving ${branch} to ${source}`
  );
}

/**
 *
 * @param {string} url
 * @param {{ path: string ; branch: string ; log: boolean }} opts
 */
function _getRepositoryLatest(url, opts) {
  const repoPath = opts.path;
  const branch = opts.branch;
  const remoteBranch = `refs/remotes/origin/${branch}`;
  const log = opts.log;
  return new Promise((resolve, reject) => {
    fs.access(repoPath, async err => {
      if (err) {
        // Not yet cloned
        util.conditionalLog(log, `Cloning ${url} to ${repoPath}`);
        try {
          const repo = await NodeGit.Clone(url, repoPath);
          util.conditionalLog(log, 'Cloned repo');
          util.conditionalLog(log, `Setting branch to ${branch}`);
          const reference = await setBranchTo(repo, branch, remoteBranch);
          await resetToReference(repo, reference, log);
          return resolve(repo);
        } catch (err2) {
          return reject(err2);
        }
      } else {
        // Cloned already; we need to pull
        util.conditionalLog(
          log,
          `Updating ${repoPath} from branch origin/${branch}`
        );
        try {
          const repo = await openRepository(repoPath);
          await repo.fetchAll();
          util.conditionalLog(log, `Setting branch to ${branch}`);
          const reference = await setBranchTo(repo, branch, remoteBranch);
          await resetToReference(repo, reference, log);
          return resolve(repo);
        } catch (err2) {
          return reject(err2);
        }
      }
    });
  });
}

/**
 *
 * @param {string} url
 * @param {string|{ path: string ; branch: string ; log: boolean }} opts
 */
function getRepositoryLatest(url, opts) {
  if (typeof opts === 'string') opts = { path: opts };
  if (!opts.branch) opts.branch = 'master';

  return _getRepositoryLatest(url, opts);
}

const IDENTIFIER_TYPE_COMMIT = 0;
const IDENTIFIER_TYPE_REFERENCE = 1;

const IDENTIFIER_NAMES = {
  0: 'commit',
  1: 'reference'
};

function resolveIdentifierByName(repo, identifier) {
  const errors = [];
  return repo
    .getReference(identifier)
    .then(async reference => {
      const commit = await reference.peel(NodeGit.Object.TYPE.COMMIT)
      const name = reference.name();

      return {
        type: IDENTIFIER_TYPE_REFERENCE,
        commit: commit,
        name: name
      };
    })
    .catch(async err => {
      errors.push(err);
      const commit = await NodeGit.Commit.lookup(repo, identifier);
      return {
        type: IDENTIFIER_TYPE_COMMIT,
        commit: commit
      };
    })
    .catch(async err => {
      errors.push(err);
      const commit = await NodeGit.Commit.lookupPrefix(
        repo,
        NodeGit.Oid.fromString(identifier),
        identifier.length
      );
      return {
        type: IDENTIFIER_TYPE_COMMIT,
        commit: commit
      };
    })
    .catch(err => {
      errors.push(err);
      console.error(
        `${identifier} doesn't seem to be a branch, tag, nor commit.`
      );
      console.error('We collected these errors while trying different alternatives:')
      console.error(errors.map(e => e.message));
      throw new Error('Failed to resolve identifier ' + identifier);
    });
}

/**
 *
 * @param {string} identifier
 * @param {boolean} log
 */
async function resetTo(repo, identifier, log) {
  const resolved = await resolveIdentifierByName(repo, identifier);
  util.conditionalLog(
    log,
    `resolved ${identifier} as a ${IDENTIFIER_NAMES[resolved.type]}`
  );

  if (resolved.type === IDENTIFIER_TYPE_REFERENCE) {
    util.conditionalLog(log, `Setting head to reference ${resolved.name}`);

    await repo.setHead(resolved.name);
  } else {
    // Commit and tag both end up in detached head
    util.conditionalLog(
      log,
      `Setting head to detached commit ${resolved.commit}`
    );

    await repo.setHeadDetached(resolved.commit);
  }

  await NodeGit.Reset.reset(repo, resolved.commit, NodeGit.Reset.TYPE.HARD, {});
  const index = await repo.index();
  await index.clear();
}

async function resetToReference(repo, reference, log) {
  util.conditionalLog(log, `Setting head to reference ${reference.name()}`);
  await repo.setHead(reference.name());
  const target = reference.target();
  const commit = await repo.getCommit(target);
  await NodeGit.Reset.reset(repo, commit, NodeGit.Reset.TYPE.HARD, {});
  const index = await repo.index();
  await index.clear();
}

/**
 *
 * @param {Commit} commit
 * @param {boolean} log
 */
async function resetToCommit(repo, commit, log) {
  util.conditionalLog(log, `Setting head to detached commit ${commit}`);
  await repo.setHeadDetached(commit.id());
  await NodeGit.Reset.reset(repo, commit, NodeGit.Reset.TYPE.HARD, {});
  const index = await repo.index();
  await index.clear();
}

/**
 *
 * @param {string} range
 * @param {boolean} log
 */
function getCommitRange(repo, range, log) {
  util.conditionalLog(log, `Finding commits in range ${range}`);

  return gitRange.parse(repo, range).then(revisions => {
    util.conditionalLog(
      log,
      `Found ${util.pluralize(revisions.length, 'commit', 'commits')} in range`
    );
    return revisions.commits();
  });
}

/**
 *
 * @param {string} range
 * @param {boolean} log
 */
async function getTagRange(repo, range, log) {
  const all = range === '*';
  const split = range.split('..');
  const startTag = split[0];
  const endTag = split[1];
  if (!all) {
    if (split.length !== 2) {
      throw new Error(
        `Expected range that looks like tag1..tag2, *..tag, tag..*, or *. Got ${range}`
      );
    }
    util.conditionalLog(log, `Finding tags between ${startTag} and ${endTag}`);
  } else {
    util.conditionalLog(log, `Finding all tags`);
  }
  const unfiltered = await NodeGit.Tag.list(repo);
  const tags = unfiltered.filter(tag => semver.valid(tag));
  tags.sort(semver.compare);
  let start, end;
  if (!all && startTag && startTag !== '') {
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] === startTag) {
        start = i;
        break;
      }
    }
  } else {
    start = 0;
  }

  if (start === undefined) {
    throw new Error('Could not find start tag ' + startTag);
  }

  if (!all && endTag && endTag !== '*') {
    for (let i = start; i < tags.length; i++) {
      if (tags[i] === endTag) {
        end = i;
        break;
      }
    }
  } else {
    end = tags.length - 1;
  }

  if (end === undefined) {
    throw new Error('Could not find end tag ' + startTag);
  }

  return tags.slice(start, end + 1);
}

/**
 *
 * @param {string[]} tags
 * @param {boolean} log
 */
function getCommitForTags(repo, tags, log) {
  return Promise.all(
    tags.map(async tag => {
      try {
        const reference = await repo.getReference(tag);
        const target = reference.target();
        const commit = await repo.getCommit(target).catch(async _ => {
          const tag = await NodeGit.Tag.lookup(repo, target);
          return repo.getCommit(tag.targetId());
        });
        return { source: tag, commit: commit };
      } catch (_) {
        throw new Error(`Failed to get commit for ${tag}`);
      }
    })
  );
}

function openRepository(path) {
  return NodeGit.Repository.open(path);
}

async function getOrCreateBranch(repo, branch, fromBranch) {
  try {
    return await NodeGit.Branch.lookup(
      repo,
      branch,
      NodeGit.Branch.BRANCH.LOCAL
    );
  } catch (err) {
    const other = await repo.getReference(fromBranch);
    const target = other.target();
    const otherCommit = await repo.getCommit(target);
    return await repo.createBranch(branch, otherCommit, false);
  }
}

function checkoutHead(repo) {
  return NodeGit.Checkout.head(repo);
}

function defaultSignature(repo) {
  return NodeGit.Signature.default(repo);
}

function lookupTree(repo, id) {
  return NodeGit.Tree.lookup(repo, id);
}

module.exports = {
  checkoutHead: checkoutHead,
  defaultSignature: defaultSignature,
  getCommitForTags: getCommitForTags,
  getCommitRange: getCommitRange,
  getRepositoryLatest: getRepositoryLatest,
  getTagRange: getTagRange,
  lookupTree: lookupTree,
  openRepository: openRepository,
  resetTo: resetTo,
  getOrCreateBranch: getOrCreateBranch,
  resetToCommit: resetToCommit,
  resolveIdentifierByName: resolveIdentifierByName
};
