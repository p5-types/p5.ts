import fs from "node:fs";
import https from "node:https";
import path from "node:path";
import { tmpdir } from "node:os";
import zlib from "node:zlib";

// Download the latest p5 tarball from npm and extract its bundled d.ts file.
// Output: types/p5/package-index.d.ts

const PACKAGE_NAME = "p5";
const FILES_TO_EXTRACT = [
  {
    tarPath: "package/types/global.d.ts",
    outPath: path.join(__dirname, "../../types/p5/global.d.ts"),
  },
  {
    tarPath: "package/types/p5.d.ts",
    outPath: path.join(__dirname, "../../types/p5/p5.d.ts"),
  },
];

type RegistryResponse = {
  "dist-tags": { latest: string };
  versions: Record<string, { dist: { tarball: string } }>;
};

function fetchJson<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString()));
          } catch (err) {
            reject(err);
          }
        });
      })
      .on("error", reject);
  });
}

async function latestTarballUrl(pkg: string): Promise<string> {
  const meta = await fetchJson<RegistryResponse>(
    `https://registry.npmjs.org/${pkg}`
  );
  const latest = meta["dist-tags"].latest;
  return meta.versions[latest].dist.tarball;
}

function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        res.pipe(file);
        file.on("finish", () =>
          file.close((closeErr) => (closeErr ? reject(closeErr) : resolve()))
        );
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

function parseTarForFile(tarBuffer: Buffer, wantedPath: string): Buffer | null {
  const BLOCK = 512;
  let offset = 0;
  while (offset + BLOCK <= tarBuffer.length) {
    const header = tarBuffer.subarray(offset, offset + BLOCK);
    // Zeroed block means end of archive.
    if (header.every((b) => b === 0)) break;

    const name = header
      .subarray(0, 100)
      .toString()
      .replace(/\0.*$/, "");
    const sizeOct = header
      .subarray(124, 136)
      .toString()
      .replace(/\0.*$/, "")
      .trim();
    const size = parseInt(sizeOct || "0", 8) || 0;

    const dataStart = offset + BLOCK;
    const dataEnd = dataStart + size;
    if (name === wantedPath) {
      return tarBuffer.subarray(dataStart, dataEnd);
    }

    const paddedSize = Math.ceil(size / BLOCK) * BLOCK;
    offset = dataStart + paddedSize;
  }
  return null;
}

async function extractDtsFromTarball(tarPath: string): Promise<void> {
  const gzData = await fs.promises.readFile(tarPath);
  const tarData = zlib.gunzipSync(gzData);
  for (const { tarPath, outPath } of FILES_TO_EXTRACT) {
    const fileBuffer = parseTarForFile(tarData, tarPath);
    if (!fileBuffer) {
      throw new Error(`${tarPath} not found in tarball`);
    }
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    await fs.promises.writeFile(outPath, fileBuffer);
    console.log(`Extracted ${tarPath} -> ${outPath}`);
  }
}

async function main() {
  try {
    const tarballUrl = await latestTarballUrl(PACKAGE_NAME);
    console.log(`Latest tarball: ${tarballUrl}`);

    const tarPath = path.join(tmpdir(), `${PACKAGE_NAME}.tgz`);
    await downloadFile(tarballUrl, tarPath);
    console.log(`Downloaded to ${tarPath}`);

    await extractDtsFromTarball(tarPath);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}

main();
