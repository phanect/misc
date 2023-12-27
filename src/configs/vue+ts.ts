import { tsRules } from "./overrides/lang-specific.ts";
import { vueBase } from "./overrides/vue.ts";
import { mergeConfigs } from "../helpers.ts";

delete tsRules.parser; // Do not override parser: "vue-eslint-parser"

export default mergeConfigs(vueBase, {
  overrides: [
    mergeConfigs(tsRules, {
      files: [ "*.vue" ],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    }),
  ],
});
