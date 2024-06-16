import * as https from "https";
import * as fs from "fs";
import { datajson, datajsonfolder } from "../filepath";

// https://stackoverflow.com/a/13544465
fs.mkdirSync(datajsonfolder, { recursive: true });

// https://stackoverflow.com/a/11944984

const file = fs.createWriteStream(datajson);
https.get(
	"https://p5js.org/reference/data.json",
	(response) => {
		response.pipe(file);

		// after download completed close filestream
		file.on("finish", () => {
			file.close();
			console.log("Download Completed");
		});
	},
);
