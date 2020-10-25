"use strict";

const { mergeConfigs } = require("./helpers");

module.exports = mergeConfigs(require("./dist/node.js.json"), {
  root: true,

  env: {
    node: true,
  },
  parserOptions: {
    project: "./tests/ts/tsconfig.json",
  },
});
