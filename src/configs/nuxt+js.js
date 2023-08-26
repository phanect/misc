"use strict";

const { jsRules } = require("./overrides/lang-specific");
const nuxtBase = require("./overrides/nuxt");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(nuxtBase, {
  overrides: [
    mergeConfigs(jsRules, {
      files: [ "*.vue" ],
      parser: "vue-eslint-parser",
    }),
  ],
});
