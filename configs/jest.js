"use strict";

module.exports = {
  extends: [
    "plugin:jest/recommended",
  ],

  env: {
    node: true,
    "jest/globals": true,
  },
  plugins: [ "jest" ],

  rules: {
    //
    // Errors
    //
    "jest/no-disabled-tests": "error",

    //
    // Warnings - styles
    //
    "jest/prefer-to-have-length": "warn",
  },
} ;
