"use strict";

const merge = require("lodash.merge");

const js = require("./configs/js");
const ts = require("./configs/ts");

const react = (lang) => merge(lang, {
  extends: [ "plugin:react/recommended" ],
  plugins: [ "react" ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
});

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
    "react+js": react(js),
    "react+ts": react(ts),
    "vue+js": vue(js),
    "vue+ts": vue(ts),
  },
};
