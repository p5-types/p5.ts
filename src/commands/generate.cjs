/// @ts-check
const generate = require('../generate-typescript-annotations');
const path = require('upath');

const datajson = path.joinSafe(__dirname, '../../p5/docs/reference/data.json')

const outdir = path.joinSafe(__dirname, '../../DefinitelyTyped/types/p5')

generate(datajson, outdir);
