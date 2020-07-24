"use strict";

const plain = require("./_base");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(plain, {
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
