"use strict";

const { mergeConfigs } = require("../../helpers");

module.exports = mergeConfigs(require("../../configs/ts"), {
  env: {
    node: true
  },
});
