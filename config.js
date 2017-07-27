"use strict";

module.exports = {
  extends: "eslint:recommended",

  env: {
    es6: true,
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
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
    "unicode-bom": ["error", "never"],

    //
    // Warnings
    // These are just a preference in coding style.
    // Following rules doesn't reduce quality or readability
    //
    "brace-style": "warn",
    "no-multi-spaces": "warn",
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "const", next: "*" },
      { blankLine: "always", prev: "let", next: "*" },
      { blankLine: "always", prev: "var", next: "*" },
    ],
    "one-var-declaration-per-line": ["warn", "initializations"],
    "prefer-arrow-callback": "warn",
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
