"use strict";

const react = require("./react");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(react, {
  extends: [ "next/core-web-vitals" ],
});
