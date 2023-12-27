import { tsRules } from "./overrides/lang-specific.ts";
import { nuxtBase } from "./overrides/nuxt.ts";
import { mergeConfigs } from "../helpers.ts";

delete tsRules.parser; // Do not override parser: "vue-eslint-parser"

export default mergeConfigs(nuxtBase, {
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
