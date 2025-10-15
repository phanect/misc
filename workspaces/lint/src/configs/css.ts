import { defineConfig } from "eslint/config";
import css from "@eslint/css";
import type { Linter } from "eslint";

export const cssConfigs: Linter.Config[] = defineConfig([
  {
    files: [ "**/*.css" ],
    extends: [ "css/recommended" ],
    language: "css/css",
    plugins: {
      css,
    },
    rules: {
      "css/prefer-logical-properties": "error",
      "css/use-baseline": "warn",
    },
  },
]);
