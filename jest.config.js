"use strict";

module.exports = {
  // Workaround for Jest
  // see: https://github.com/typescript-eslint/typescript-eslint/issues/4210#issuecomment-981203332
  resolver: "<rootDir>/jest-resolver.js",

  testEnvironment: "node",
  modulePathIgnorePatterns: [
    "<rootDir>/tests/js/",
    "<rootDir>/tests/ts/",
  ],
};
