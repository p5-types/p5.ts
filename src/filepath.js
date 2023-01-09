const upath = require("upath");
module.exports = {
	datajsonfolder: upath.joinSafe(__dirname, "../datajson/"),
	datajson: upath.joinSafe(__dirname, "../datajson/data.json"),
	outdir: upath.joinSafe(__dirname, "../types/p5"),
};
