import { defineConfig } from "eslint/config";
import css from "@eslint/css";

export const cssConfigs = defineConfig([
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
