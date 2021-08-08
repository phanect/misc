"use strict";

const { configs } = require("./lib/config");
const { mergeConfigs } = require("./src/helpers");

module.exports = mergeConfigs(configs.node, {
  root: true,

  env: {
    node: true,
  },
  parserOptions: {
    project: "./tests/ts/tsconfig.json",
  },
});
