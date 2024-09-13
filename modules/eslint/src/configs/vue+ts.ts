import { tsRules } from "./components/languages.ts";
import { vueBase } from "./components/vue.ts";
import plain from "./plain.ts";
import type { Linter } from "eslint";

export const vueTS: Linter.Config[] = [
  ...plain,
  ...vueBase,

  ...tsRules.map(tsRule => ({
    ...tsRule,

    // To overwrite tsRule's `files` property, place these properties after `...tsRule`.
    files: [ "*.vue" ],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      }
    },
  }))

];
