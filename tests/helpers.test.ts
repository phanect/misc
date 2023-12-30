import { test, expect } from "vitest";
import { toTSRules } from "../src/helpers.ts";

test("toTSRules", () => {
  const result = toTSRules({
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "require-await": "error",
    semi: [ "error", "always" ],
  });

  expect(result).toEqual({
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/semi": [ "error", "always" ],
  });
});