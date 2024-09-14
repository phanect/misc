import plain from "./plain.ts";
import { jsConfigs } from "./components/languages.ts";
import { vueBase } from "./components/vue.ts";
import type { Linter } from "eslint";

export const vueJS: Linter.Config[] = [
  ...plain,
  ...vueBase,

  ...jsConfigs.map(jsConfig => ({
    ...jsConfig,
    files: [ "*.vue" ],
  })),
];
