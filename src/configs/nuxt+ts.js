"use strict";

const { tsRules } = require("./overrides/lang-specific");
const nuxtBase = require("./overrides/nuxt");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(nuxtBase, tsRules);
