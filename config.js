"use strict";

const { mergeConfigs } = require("./helpers");

const js = require("./configs/js");
const ts = require("./configs/ts");
const node = require("./configs/node");
const _jest = require("./configs/jest"); // do not name this variable "jest" to avoid name conflict on test

const react = (lang) => mergeConfigs(lang, {
  extends: [ "plugin:react/recommended" ],
  plugins: [ "react" ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-filename-extension": "warn",
  },
});

const vue = (lang) => mergeConfigs(lang, {
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
    "node+js": node(js),
    "node+ts": node(ts),
    "react+js": react(js),
    "react+ts": react(ts),
    "vue+js": vue(js),
    "vue+ts": vue(ts),
    jest: _jest,
  },
};
