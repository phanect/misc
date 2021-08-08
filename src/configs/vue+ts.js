"use strict";

const { tsRules } = require("./overrides/lang-specific");
const vueBase = require("./overrides/vue");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(vueBase, tsRules);
