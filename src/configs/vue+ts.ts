import deepmerge from "deepmerge";
import { tsRules } from "./overrides/lang-specific.ts";
import { vueBase } from "./overrides/vue.ts";

delete tsRules.parser; // Do not override parser: "vue-eslint-parser"

export default deepmerge(vueBase, {
  overrides: [
    deepmerge(tsRules, {
      files: [ "*.vue" ],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    }),
  ],
});
