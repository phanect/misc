"use strict";

const base = require("./_base");

module.exports = {
  extends: base.extends.concat([
    "eslint:recommended",
  ]),
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: base.plugins.concat([]),
  rules: Object.assign({}, baseConfig.rules),
};
