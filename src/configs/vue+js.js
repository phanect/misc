"use strict";

const { jsRules } = require("./overrides/lang-specific");
const vueBase = require("./overrides/vue");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(vueBase, {
  overrides: [
    mergeConfigs(jsRules, {
      files: [ "*.vue" ],
      parser: "vue-eslint-parser",
    }),
  ],
});
