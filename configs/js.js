"use strict";

const base = require("./_base");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(base("js"), {
  extends: [
    "eslint:recommended",
  ],
});
