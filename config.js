"use strict";

const js = require("./configs/js");
const ts = require("./configs/ts");
const node = require("./configs/node");
const react = require("./configs/react");
const vue = require("./configs/vue");
const _jest = require("./configs/jest"); // do not name this variable "jest" to avoid name conflict on test

module.exports = {
  configs: {
    js, ts,
    "node+js": node(js),
    "node+ts": node(ts),
    "react+js": react(js),
    "react+ts": react(ts),
    "vue+js": vue(js),
    "vue+ts": vue(ts),
    jest: _jest,
  },
};
