import { jsRules } from "./overrides/lang-specific.ts";
import { vueBase } from "./overrides/vue.ts";
import { mergeConfigs } from "../helpers.ts";

export default mergeConfigs(vueBase, {
  overrides: [
    mergeConfigs(jsRules, {
      files: [ "*.vue" ],
      parser: "vue-eslint-parser",
    }),
  ],
});
