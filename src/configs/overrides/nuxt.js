"use strict";

const plain = require("../plain");
const { mergeConfigs } = require("../../helpers");

module.exports = mergeConfigs(plain, {
  extends: [
    "plugin:vue/recommended",
    "plugin:nuxt/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    extraFileExtensions: [ ".vue" ],
    sourceType: "module",
  },
  plugins: [
    "vue",
    "nuxt",
  ],
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
