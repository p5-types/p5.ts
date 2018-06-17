/// @ts-check
const fs = require('fs');
const gatherSamples = require('../gather-samples.js');
const glob = require('glob');
const makeDir = require('make-dir');
const path = require('upath');
const nutil = require('util');
const util = require('../util');

const writeFile = nutil.promisify(fs.writeFile);

exports.command = 'emit-samples [outdir] [sourcesbase] [sourcespattern]';
exports.desc = 'Extract samples from p5 sources and write them as test files';

exports.builder = {
  sourcesbase: {
    type: 'string',
    default: path.joinSafe(__dirname, '../../p5/src/'),
    describe: 'Base directory for the files samples should be extracted from'
  },
  sourcespattern: {
    type: 'string',
    default: '**/*.js',
    describe: 'Pattern for the files samples should be extracted from'
  },
  outdir: {
    type: 'string',
    default: path.joinSafe(__dirname, '../../DefinitelyTyped/types/p5/samples'),
    describe: 'Directory where generated samples will be placed'
  },
  silent: {
    type: 'boolean',
    describe: 'Suppress status messages',
    default: false
  }
};

exports.handler = args => {
  const base = args.sourcesbase;
  const pattern = args.sourcespattern;
  const outdir = args.outdir;

  const filenames = glob.sync(pattern, {
    cwd: base,
    silent: args.silent
  });

  const processed = filenames.map(filename => {
    const fullFilename = path.joinSafe(base, filename);
    const file = fs.readFileSync(fullFilename, 'utf8');
    return {
      filename: filename,
      fullFilename: fullFilename,
      samples: gatherSamples(file)
    };
  });

  return Promise.all(
    processed.map(async item => {
      const oldname = item.filename;
      const dir = path.dirname(oldname);
      await makeDir(path.joinSafe(outdir, dir));
      const extension = path.extname(oldname);
      const basename = path.basename(oldname, extension);
      return Promise.all(
        item.samples.map((sample, i) => {
          const newname = path.joinSafe(outdir, dir, `${basename}.${i}.ts`);
          return writeFile(newname, sample);
        })
      );
    })
  )
    .then(_ => util.conditionalLog('Done without errors'))
    .catch(e => {
      console.error(e);
      process.exit(1);
    });
};
