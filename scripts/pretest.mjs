/* eslint node/no-unpublished-import: "off" */ // This script only runs before test

import { dirname } from "dirname-filename-esm";
import { writeFile } from "fs/promises";
import fetch from "node-fetch";
import { resolve } from "path";

const __dirname = dirname(import.meta);

(async () => {
  // Install jest-resolver.js
  // see: https://github.com/typescript-eslint/typescript-eslint/issues/4210#issuecomment-981203332
  const res = await fetch("https://raw.githubusercontent.com/typescript-eslint/typescript-eslint/eaaa2047ca54f098dcdd32aaf5d8949495c6be26/tests/jest-resolver.js");
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(resolve(__dirname, "../jest-resolver.js"), buffer);
})();
