"use strict";

const { mkdir, writeFile } = require("fs/promises");
const { join } = require("path");

const js = require("./configs/js");
const ts = require("./configs/ts");
const node = require("./configs/node");
const react = require("./configs/react");
const vue = require("./configs/vue");
const _jest = require("./configs/jest"); // do not name this variable "jest" to avoid name conflict on test

const distDir = join(__dirname, "dist/");

(async () => {
  await mkdir(distDir, { recursive: true });
  await Promise.all([
    writeFile(join(distDir, "js.json"), JSON.stringify(js, null, 2)),
    writeFile(join(distDir, "ts.json"), JSON.stringify(ts, null, 2)),
    writeFile(join(distDir, "node.js.json"), JSON.stringify(node(js), null, 2)),
    writeFile(join(distDir, "node.ts.json"), JSON.stringify(node(ts), null, 2)),
    writeFile(join(distDir, "react.js.json"), JSON.stringify(react(js), null, 2)),
    writeFile(join(distDir, "react.ts.json"), JSON.stringify(react(ts), null, 2)),
    writeFile(join(distDir, "vue.js.json"), JSON.stringify(vue(js), null, 2)),
    writeFile(join(distDir, "vue.ts.json"), JSON.stringify(vue(ts), null, 2)),
    writeFile(join(distDir, "jest.json"), JSON.stringify(_jest, null, 2)),
  ]);

  console.log("JSONs are successfully generated");
})();
