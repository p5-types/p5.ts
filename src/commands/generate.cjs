/// @ts-check
const generate = require("../generate-typescript-annotations");
const { datajson ,outdir} = require("../filepath");


generate(datajson, outdir);
