"use strict";

const merge = require("lodash.merge");

const js = require("./configs/js");
const ts = require("./configs/ts");

const vue = (lang) => merge(lang, {
  extends: [ "plugin:vue/recommended" ],
  plugins: [ "vue" ],
  rules: {
    //
    // Warnings
    //
    "vue/html-self-closing": [ "warn", { html: { normal: "never" }}],
    "vue/max-attributes-per-line": [ "warn", {
      singleline: 7,
      multiline: { max: 2 },
    }],
  },
});

module.exports = {
  configs: {
    js, ts,
    "vue+js": vue(js),
    "vue+ts": vue(ts),
  },
};
