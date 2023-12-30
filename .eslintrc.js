"use strict";

const config = require("./node.json");
const { mergeConfigs } = require("./src/helpers");

module.exports = mergeConfigs(config, {
  root: true,

  env: {
    node: true,
  },
  parserOptions: {
    project: "./tests/fixtures/tsconfig.json",
  },
  ignorePatterns: [
    "tests/fixtures/invalid/**",
    "tests/fixtures/valid/**",
  ],
});
