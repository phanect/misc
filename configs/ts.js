"use strict";

const js = require("./js");

module.exports = {
  extends: js.extends.concat([ "plugin:@typescript-eslint/recommended" ]),
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: js.plugins.concat([ "@typescript-eslint" ]),
  rules: Object.assign({
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
  }, js.rules),
};
