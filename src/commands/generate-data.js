/// @ts-check
const path = require('upath');
const util = require('../util');

exports.command = 'generate-data [dir]';
exports.desc = 'Generate YUIDocs data file';

exports.builder = {
  dir: {
    type: 'string',
    default: path.joinSafe(__dirname, '../../p5'),
    describe: 'Root directory for p5.js repository'
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
  }
};

exports.handler = async args => {
  const log = !args.silent;
  util.conditionalLog(
    log,
    `Running ${args.npm} install to update p5.js dependencies`
  );
  try {
    await util.npmInstall(args.dir, args.npm);
    util.conditionalLog(log, 'Dependencies are now up to date');
    util.conditionalLog(log, 'Building YUIDoc');
    await util.npmRun('grunt -- yuidoc', args.dir, args.npx);
    util.conditionalLog(log, 'Done without errors');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
