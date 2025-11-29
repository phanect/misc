import { defineConfig } from "eslint/config";
import jsonc from "eslint-plugin-jsonc";
import type { Linter } from "eslint";
import type { JsonExtensions } from "../utils.ts";

export const jsonConfigs: Linter.Config[] = defineConfig([
  {
    files: [ "**/*.json", "**/*.jsonc", "**/*.json5" ] as JsonExtensions,
    rules: {
      "jsonc/array-bracket-spacing": [ "error", "always", {
        objectsInArrays: false,
        arraysInArrays: false,
      }],
      "jsonc/comma-style": [ "error", "last" ],
      "jsonc/indent": [ "error", 2 ],
      "jsonc/key-spacing": [ "error", {
        beforeColon: false,
        afterColon: true,
        mode: "minimum",
      }],
      "jsonc/object-curly-spacing": [ "error", "always", {
        arraysInObjects: false,
        objectsInObjects: false,
      }],
    },
  },
  {
    files: [ "**/*.json" ],
    ignores: [ "**/tsconfig.json", ".vscode/**/*.json" ],
    extends: [
      jsonc.configs["flat/recommended-with-json"],
    ],
  },
  {
    files: [ "**/*.jsonc", "**/tsconfig.json", ".vscode/**/*.json" ],
    extends: [
      jsonc.configs["flat/recommended-with-jsonc"],
    ],
  },
  {
    files: [ "**/*.json5" ],
    extends: [
      jsonc.configs["flat/recommended-with-json5"],
    ],
    rules: {
      "jsonc/comma-dangle": [ "error", {
        arrays: "always-multiline",
        objects: "always-multiline",
      }],
      "jsonc/quote-props": [ "error", "as-needed" ],
    },
  },
]);
