"use strict";

const base = require("./_base");

const baseConfig = base("js");

module.exports = {
  extends: baseConfig.extends.concat([
    "eslint:recommended",
  ]),
  parserOptions: baseConfig.parserOptions,
  plugins: baseConfig.plugins.concat([]),
  rules: Object.assign({}, baseConfig.rules),
};
