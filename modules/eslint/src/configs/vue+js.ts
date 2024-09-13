import plain from "./plain.ts";
import { jsRules } from "./components/languages.ts";
import { vueBase } from "./components/vue.ts";
import type { Linter } from "eslint";

export const vueJS: Linter.Config[] = [
  ...plain,
  ...vueBase,

  ...jsRules.map(jsRule => ({
    ...jsRule,
    files: [ "*.vue" ],
  })),
];
