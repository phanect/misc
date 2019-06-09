"use strict";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:editorconfig/noconflict",
  ],

  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: [
    "editorconfig",
    "no-unsanitized",
  ],
  rules: {
    "comma-dangle": [ "error", "always-multiline" ],
    "no-async-promise-executor": "error",
    "no-misleading-character-class": "error",
    "no-template-curly-in-string": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-whitespace-before-property": "error",
    "no-var": "error",
    "prefer-const": [ "error", {
      destructuring: "all",
      ignoreReadBeforeAssign: true,
    }],
    semi: [ "error", "always" ],

    "editorconfig/editorconfig": "error",

    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",

    //
    // Warnings - Testing
    // Because following rules might make a problem,
    // currently they are not treated as errors.
    //
    "no-prototype-builtins": "warn",
    "class-methods-use-this": "warn",
    complexity: "warn",

    //
    // Warnings - styles
    // These are just a preference in coding style.
    // Following rules doesn't reduce quality or readability
    //
    "array-bracket-spacing": [ "warn", "always", { arraysInArrays: false, objectsInArrays: false }],
    "brace-style": "warn",
    curly: "warn",
    "no-multi-spaces": [ "warn", { ignoreEOLComments: true, exceptions: { Property: true }}],
    "object-curly-spacing": [ "warn", "always", { arraysInObjects: false, objectsInObjects: false }],
    "one-var": [ "warn", "never" ],
    "one-var-declaration-per-line": [ "warn", "initializations" ],
    "padded-blocks": [ "warn", "never" ],
    "prefer-arrow-callback": "warn",
    "quote-props": [ "warn", "as-needed" ],
    quotes: [ "warn", "double" ],
    "space-before-blocks": [ "warn", "always" ],
    "space-before-function-paren": [ "warn", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always",
    }],
    "space-in-parens": [ "warn", "never" ],
    "spaced-comment": [ "warn", "always" ],
    "switch-colon-spacing": [ "warn", { before: false, after: true }],

    "no-console": "off",
  },
};
