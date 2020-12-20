"use strict";

const base = require("./_base");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(base("ts"), {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: [ "@typescript-eslint" ],
  rules: {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/explicit-function-return-type": [ "error", { allowExpressions: true }],

    //
    // Warnings
    //
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",

    //
    // Off
    //
    "@typescript-eslint/indent": "off", // avoid conflict against editorconfig/indent
    "@typescript-eslint/no-this-alias": "off",

    // These rules may warn new ES syntax which is supported by TypeScript (e.g. import)
    "node/no-unsupported-features/es-builtins": "off",
    "node/no-unsupported-features/es-syntax": "off",
  },
  settings: {
    jsdoc: {
      mode: "typescript",
    },
  },
});
