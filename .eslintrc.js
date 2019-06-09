"use strict";

const merge = require("lodash.merge");

module.exports = merge(require("./configs/js"), {
  root: true,

  env: {
    node: true
  },
});
