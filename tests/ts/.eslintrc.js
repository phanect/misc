"use strict";

const merge = require("lodash.merge");

module.exports = merge(require("../../configs/ts"), {
  env: {
    node: true
  },
});
