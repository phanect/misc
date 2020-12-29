"use strict";

const { configs } = require("./config");
const { mergeConfigs } = require("./helpers");

module.exports = mergeConfigs(configs.node, {
  root: true,

  env: {
    node: true,
  },
  parserOptions: {
    project: "./tests/ts/tsconfig.json",
  },
});
