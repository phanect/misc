"use strict";

const { mergeConfigs } = require("../helpers");

module.exports = (lang) => (mergeConfigs(lang, {
  extends: [ "plugin:node/recommended" ],
  plugins: [ "node" ],
  rules: {
    //
    // Off
    //
    "node/no-unsupported-features/es-builtins": "off",
    "node/no-unsupported-features/es-syntax": "off",
  },
}));
