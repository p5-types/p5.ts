/// @ts-check
const git = require('../git');
const util = require('../util');
const path = require('upath');

exports.command = 'checkout <identifier> [dir]';
exports.desc = 'Checkout a branch, commit, or tag';

exports.builder = {
  dir: {
    type: 'string',
    default: path.joinSafe(__dirname, '../../p5'),
    describe: 'Destination directory for p5.js'
  },
  identifier: {
    type: 'string',
    describe:
      'git-shorthand for the branch, tag, or the commit hash to check out'
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
    const repo = await git.openRepository(args.dir);
    await git.resetTo(repo, args.identifier, log);
    util.conditionalLog(log, 'Done without errors');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
