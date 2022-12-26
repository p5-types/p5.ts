/// @ts-check
const https = require('https');
const fs  = require('fs')
const upath = require('upath');


const command = "download-p5 [dir]";
const desc = "Clone or update p5.js git repository";

// exports.builder = {
//   dir: {
//     type: 'string',
//     default: joinSafe(__dirname, '../../p5'),
//     describe: 'Destination directory for p5.js'
//   },
//   repo: {
//     type: 'string',
//     default: 'https://github.com/processing/p5.js.git',
//     describe: 'URL to p5.js repository (use https)'
//   },
//   branch: {
//     type: 'string',
//     default: 'main',
//     describe: 'branch to check out and update from'
//   },
//   silent: {
//     type: 'boolean',
//     describe: 'Suppress status messages',
//     default: false
//   }
// };

// exports.handler = async args => {
//   const log = !args.silent;

// https://stackoverflow.com/a/13544465
fs.mkdirSync(upath.joinSafe(__dirname, "../../p5/docs/reference/"), {
	recursive: true,
});
// https://stackoverflow.com/a/11944984
const file = fs.createWriteStream(
	upath.joinSafe(__dirname, "../../p5/docs/reference/data.json"),
);
const request = https.get(
	"https://raw.githubusercontent.com/processing/p5.js-website/main/src/templates/pages/reference/data.json",
	(response) => {
		response.pipe(file);

		// after download completed close filestream
		file.on("finish", () => {
			file.close();
			console.log("Download Completed");
		});
	},
)