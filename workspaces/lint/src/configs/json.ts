import json from "@eslint/json";
import type { Linter } from "eslint";

export const jsonConfigs: Linter.Config[] = [
  {
    plugins: {
      json,
    },
  },
  {
    files: [ "**/*.json" ],
    ignores: [
      "**/tsconfig.json",
      ".vscode/**/*.json",
      "package-lock.json",
    ],
    language: "json/json",
    ...json.configs.recommended,
  },
  {
    files: [
      "**/*.jsonc",
      "**/tsconfig.json",
      ".vscode/**/*.json",
    ],
    language: "json/jsonc",
    ...json.configs.recommended,
  },
  {
    files: [ "**/*.json5" ],
    language: "json/json5",
    ...json.configs.recommended,
  },
];
