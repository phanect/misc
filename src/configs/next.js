"use strict";

const react = require("./react");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(react, {
  extends: [ "plugin:@next/next/recommended" ],
  plugins: [ "@next/next" ],
});
