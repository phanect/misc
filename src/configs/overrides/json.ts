import { configs as jsonc } from "eslint-plugin-jsonc";
import type { Linter } from "eslint";

export const jsonConfigs = [
  {
    files: [ "*.json", "*.jsonc", "*.json5" ],
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
    }
  },
  ...(
    jsonc["flat/recommended-with-json"].map(config => ({
      files: [ "*.json" ],
      ignores: [ "**/tsconfig.json", ".vscode/**/*.json" ],
      ...config
    }))
  ),
  ...(
    jsonc["flat/recommended-with-jsonc"].map(config => ({
      files: [ "*.jsonc", "**/tsconfig.json", ".vscode/**/*.json" ],
      ...config
    }))
  ),
  ...jsonc["flat/recommended-with-json5"],
  {
    files: [ "*.json5" ],
    rules: {
      "jsonc/comma-dangle": [ "error", {
        arrays: "always-multiline",
        objects: "always-multiline",
      }],
      "jsonc/quote-props": [ "error", "as-needed" ],
    },
  }
] as Linter.FlatConfig[];