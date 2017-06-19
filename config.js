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
  },
};
