"use strict";

const js = require("./configs/js");
const ts = require("./configs/ts");

const react = (lang) => ({
  extends: lang.extends.concat("plugin:react/recommended"),
  plugins: lang.plugins.concat("react"),
  parserOptions: Object.assign(lang.parserOptions, {
    ecmaFeatures: {
      jsx: true,
    },
  }),
  rules: Object.assign(lang.rules, {}),
});

const vue = (lang) => ({
  extends: lang.extends.concat("plugin:vue/recommended"),
  plugins: lang.plugins.concat("vue"),
  rules: Object.assign(lang.rules, {
    //
    // Warnings
    //
    "vue/html-self-closing": [ "warn", { html: { normal: "never" }}],
    "vue/max-attributes-per-line": [ "warn", {
      singleline: 7,
      multiline: { max: 2 },
    }],
  }),
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
