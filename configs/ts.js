"use strict";

const base = require("./_base");

module.exports = {
  extends: base.extends.concat([
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ]),
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: base.plugins.concat([ "@typescript-eslint" ]),
  rules: Object.assign({
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/indent": [ "error", 2, {
      SwitchCase: 1,
    }],

    //
    // Warnings
    //
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/class-name-casing": "warn",
    "@typescript-eslint/interface-name-prefix": "warn",
    "@typescript-eslint/no-unused-vars": "error",
  }, base.rules),
};
