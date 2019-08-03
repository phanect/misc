"use strict";

const js = require("./configs/js");
const ts = require("./configs/ts");
const node = require("./configs/node");

const react = (lang) => ({
  extends: lang.extends.concat("plugin:react/recommended"),
  plugins: lang.plugins.concat("react"),
  parserOptions: Object.assign(lang.parserOptions, {
    ecmaFeatures: {
      jsx: true,
    },
  }),
  // Since first argument is modified, lang.rules must be the second argument,
  // or js.rules includes rules for React or Vue
  rules: Object.assign({}, lang.rules),
});

const vue = (lang) => ({
  extends: lang.extends.concat("plugin:vue/recommended"),
  plugins: lang.plugins.concat("vue"),
  rules: Object.assign({
    //
    // Warnings
    //
    "vue/html-self-closing": [ "warn", { html: { normal: "never" }}],
    "vue/max-attributes-per-line": [ "warn", {
      singleline: 7,
      multiline: { max: 2 },
    }],
    // Since first argument is modified, lang.rules must be the second argument,
    // or js.rules includes rules for React or Vue
  }, lang.rules),
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
  },
};
