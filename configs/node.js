"use strict";

const plain = require("./_base");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(plain, {
  extends: [ "plugin:node/recommended" ],
  plugins: [ "node" ],
  rules: {
    //
    // Errors
    //
    // While it is disabled on base config, it is enabled here since it works on Node
    "import/no-unresolved": [ "error", { commonjs: true }],
    "node/no-missing-import": [ "error", {
      tryExtensions: [ ".js", ".ts", ".json" ], // Add .ts
    }],
  },
});
