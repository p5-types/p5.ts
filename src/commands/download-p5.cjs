/// @ts-check
const https = require("https");
const fs = require("fs");
const { datajson, datajsonfolder } = require("../filepath");

// https://stackoverflow.com/a/13544465
fs.mkdirSync(datajsonfolder, { recursive: true });

// https://stackoverflow.com/a/11944984

const file = fs.createWriteStream(datajson);
https.get(
	"https://raw.githubusercontent.com/processing/p5.js-website/main/src/templates/pages/reference/data.json",
	(response) => {
		response.pipe(file);

		// after download completed close filestream
		file.on("finish", () => {
			file.close();
			console.log("Download Completed");
		});
	},
);
