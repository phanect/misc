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
    "no-trailing-spaces": "error", // Not warning to keep diff in commit log readable
    "no-whitespace-before-property": "error",
    "no-var": "error",
    "unicode-bom": ["error", "never"],

    //
    // Warnings
    // These are just a preference in coding style.
    // Following rules doesn't reduce quality or readability
    //
    "no-multi-spaces": "warn",
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
