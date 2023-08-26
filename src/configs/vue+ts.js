"use strict";

const { tsRules } = require("./overrides/lang-specific");
const vueBase = require("./overrides/vue");
const { mergeConfigs } = require("../helpers");

delete tsRules.parser; // Do not override parser: "vue-eslint-parser"

module.exports = mergeConfigs(vueBase, {
  overrides: [
    mergeConfigs(tsRules, {
      files: [ "*.vue" ],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    }),
  ],
});
