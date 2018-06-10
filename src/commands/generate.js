/// @ts-check
const generate = require('../generate-typescript-annotations');
const path = require('upath');
const fs = require('fs');
const YError = require('yargs/lib/yerror');

exports.command = 'generate [data] [outdir]';
exports.desc = 'Generate definitions from YUIDocs data file';

exports.builder = {
  data: {
    type: 'string',
    default: path.joinSafe(__dirname, '../../p5/docs/reference/data.json'),
    describe: 'Source file'
  },
  outdir: {
    type: 'string',
    default: path.joinSafe(__dirname, '../../DefinitelyTyped/types/p5'),
    describe: 'Directory where generated definitions will be placed'
  },
  local: {
    type: 'string',
    describe: 'Output file for index.d.ts'
  },
  global: {
    type: 'string',
    describe: 'Output file for global.d.ts'
  },
  silent: {
    type: 'boolean',
    describe: 'Suppress status messages',
    default: false
  }
};

exports.handler = args => {
  args.local = args.local || path.joinSafe(args.outdir, 'index.d.ts');
  args.global = args.global || path.joinSafe(args.outdir, 'global.d.ts');
  validatePaths(args);

  if (args.silent) {
    args.logger = () => {};
  }

  generate(args);
};

function validatePaths(args) {
  const localDir = path.dirname(args.local);
  const globalDir = path.dirname(args.global);

  if (!fs.existsSync(args.data) || !fs.lstatSync(args.data).isFile()) {
    throw new YError(`The data file ${args.data} is not a file that exists.`);
  }
  if (localDir === globalDir) {
    if (!fs.existsSync(localDir) || !fs.lstatSync(localDir).isDirectory()) {
      throw new YError(
        `The base directory ${localDir} is not a directory that exists.`
      );
    }
  } else {
    if (!fs.existsSync(localDir) || !fs.lstatSync(localDir).isDirectory()) {
      throw new YError(
        `The path for local definition output ${localDir} is not a directory that exists.`
      );
    }
    if (!fs.existsSync(globalDir) || !fs.lstatSync(globalDir).isDirectory()) {
      throw new YError(
        `The path for global definition output ${globalDir} is not a directory that exists.`
      );
    }
  }
}
