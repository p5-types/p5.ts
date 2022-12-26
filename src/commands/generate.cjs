/// @ts-check
const generate = require('../generate-typescript-annotations');
const path = require('upath');
const fs = require('fs-extra');
const YError = require('yargs');

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
  silent: {
    type: 'boolean',
    describe: 'Suppress status messages',
    default: false
  }
};

exports.handler = args => {
  validatePaths(args);

  if (args.silent) {
    args.logger = () => {};
  }

  
};
generate(path.joinSafe(__dirname, '../../p5/docs/reference/data.json'), path.joinSafe(__dirname, '../../DefinitelyTyped/types/p5'));
function validatePaths(args) {
  if (!fs.existsSync(args.data) || !fs.lstatSync(args.data).isFile()) {
    throw new YError(`The data file ${args.data} is not a file that exists.`);
  }
  if (!fs.existsSync(args.outdir) || !fs.lstatSync(args.outdir).isDirectory()) {
    throw new YError(
      `The output directory ${args.outdir} is not a directory that exists.`
    );
  }
}
