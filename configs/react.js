"use strict";

const plain = require("./_base");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(plain, {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [ "react", "react-hooks" ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-filename-extension": "warn",
  },
});
