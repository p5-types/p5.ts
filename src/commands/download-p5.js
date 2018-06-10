/// @ts-check
const git = require('../git');
const util = require('../util');
const path = require('upath');

exports.command = 'download-p5 [dir]';
exports.desc = 'Clone or update p5.js git repository';

exports.builder = {
  dir: {
    type: 'string',
    default: path.joinSafe(__dirname, '../../p5'),
    describe: 'Destination directory for p5.js'
  },
  repo: {
    type: 'string',
    default: 'https://github.com/processing/p5.js.git',
    describe: 'URL to p5.js repository (use https)'
  },
  branch: {
    type: 'string',
    default: 'master',
    describe: 'branch to check out and update from'
  },
  silent: {
    type: 'boolean',
    describe: 'Suppress status messages',
    default: false
  }
};

exports.handler = async args => {
  const log = !args.silent;

  try {
    await git.getRepositoryLatest(args.repo, {
      path: args.dir,
      branch: args.branch,
      log: log
    });

    util.conditionalLog(log, 'Done without errors');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
