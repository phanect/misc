"use strict";

const vueRules = require("./vue.js");
const { mergeConfigs } = require("../../helpers");

module.exports = mergeConfigs(vueRules, {
  extends: [ "@nuxt/eslint-config" ],
});
