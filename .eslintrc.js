"use strict";

const { mergeConfigs } = require("./helpers");

module.exports = mergeConfigs(require("./configs/js"), {
  root: true,

  env: {
    node: true,
  },
  parserOptions: {
    project: "./tests/ts/tsconfig.json",
  },
});
