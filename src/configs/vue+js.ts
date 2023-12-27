import plain from "./plain.ts";
import { jsRules } from "./overrides/lang-specific.ts";
import { vueBase } from "./overrides/vue.ts";
import type { Linter } from "eslint";

export const vueJS: Linter.Config[] = [
  ...plain,
  ...vueBase,

  ...jsRules.map(jsRule => ({
    ...jsRule,
    files: [ "*.vue" ],
  })),
];
