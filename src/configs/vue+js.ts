import plain from "./plain.ts";
import { vueBase } from "./overrides/vue.ts";
import type { Linter } from "eslint";
import { jsRules } from "./overrides/lang-specific.ts";

export const vueJS: Linter.FlatConfig[] = [
  ...plain,
  ...vueBase,
  {
    files: [ "*.vue" ],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      }
    },
    ...jsRules,
  },
];
