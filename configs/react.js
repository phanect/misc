"use strict";

const { mergeConfigs } = require("../helpers");

module.exports = (lang) => mergeConfigs(lang, {
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
