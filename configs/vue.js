"use strict";

const { mergeConfigs } = require("../helpers");

module.exports = (lang) => mergeConfigs(lang, {
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
