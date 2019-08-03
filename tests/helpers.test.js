"use strict";

const { getLangSpecificRules } = require("../helpers");

test("getLangSpecificRules (ts)", () => {
  const result = getLangSpecificRules({
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "require-await": "error",
    semi: [ "error", "always" ],
  }, "ts");

  expect(result).toEqual({
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/semi": [ "error", "always" ],
  });
});

test("getLangSpecificRules (js)", () => {
  const result = getLangSpecificRules({
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "require-await": "error",
    semi: [ "error", "always" ],
  }, "js");

  expect(result).toEqual({
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "require-await": "error",
    semi: [ "error", "always" ],
  });
});
