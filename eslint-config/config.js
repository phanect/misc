"use strict";

module.exports = {
  extends: "eslint:recommended",

  env: {
    es6: true,
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "jsx": true,
    },
  },

  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "eol-last": ["error", "always"], // Not warning to keep diff in commit log readable
    "indent": ["error", 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }}],
    "no-trailing-spaces": "error", // Not warning to keep diff in commit log readable
    "no-whitespace-before-property": "error",
    "no-var": "error",
    "semi": [ "error", "always" ],
    "unicode-bom": ["error", "never"],

    //
    // Warnings
    // These are just a preference in coding style.
    // Following rules doesn't reduce quality or readability
    //
    "array-bracket-spacing": [ "warn", "always", { arraysInArrays: false, objectsInArrays: false }],
    "brace-style": "warn",
    "no-multi-spaces": [ "warn", { ignoreEOLComments: true, exceptions: { Property: true }}],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "const", next: "*" },
      { blankLine: "always", prev: "let", next: "*" },
    ],
    "object-curly-spacing": [ "warn", "always", { arraysInObjects: false, objectsInObjects: false }],
    "one-var": ["warn", "always"],
    "one-var-declaration-per-line": ["warn", "initializations"],
    "prefer-arrow-callback": "warn",
    "quote-props": ["warn", "as-needed"],
    "quotes": ["warn", "double"],
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": ["warn", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always",
    }],
    "space-in-parens": ["warn", "never"],
    "spaced-comment": ["warn", "always"],
    "switch-colon-spacing": ["warn", { "before": false, "after": true }],
  },
};
