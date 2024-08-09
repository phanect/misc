import { tsConfigs } from "./components/languages.ts";
import { vueBase } from "./components/vue.ts";
import plain from "./plain.ts";
import type { Linter } from "eslint";

export const vueTS: Linter.Config[] = [
  ...plain,
  ...vueBase,

  ...tsConfigs.map(tsConfig => ({
    ...tsConfig,

    // To overwrite `tsConfig`'s `files` property, place these properties after `...tsConfig`.
    files: [ "*.vue" ],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      }
    },
  }))

];
