"use strict";

const base = require("./_base");
const baseConfig = base("ts");

module.exports = {
  extends: baseConfig.extends.concat([
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ]),
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: baseConfig.plugins.concat([ "@typescript-eslint" ]),
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
  }, baseConfig.rules),
};
