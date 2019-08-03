"use strict";

const { mergeConfigs } = require("../helpers");

module.exports = (lang) => (mergeConfigs(lang, {
  extends: [ "plugin:node/recommended" ],
  plugins: [ "node" ],
  rules: {
    //
    // Errors
    //
    // While it is disabled on base config, it is enabled here since it works on Node
    "import/no-unresolved": [ "error", { commonjs: true }],
  },
}));
