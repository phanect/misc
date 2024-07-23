import { tsRule } from "./overrides/lang-specific.ts";
import plain from "./plain.ts";
import { vueBase } from "./overrides/vue.ts";
import type { Linter } from "eslint";

export const vueTS: Linter.FlatConfig[] = [
  ...plain,
  ...vueBase,

  // overwrite tsRule's `files` property, so place after `...tsRule`.
  {
    files: [ "*.vue" ],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      }
    },
    ...tsRule,
  },
];
