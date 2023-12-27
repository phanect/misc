import { jsRules } from "./overrides/lang-specific.ts";
import { nuxtBase } from "./overrides/nuxt.ts";
import { mergeConfigs } from "../helpers.ts";

export default mergeConfigs(nuxtBase, {
  overrides: [
    mergeConfigs(jsRules, {
      files: [ "*.vue" ],
      parser: "vue-eslint-parser",
    }),
  ],
});
