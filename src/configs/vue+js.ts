import deepmerge from "deepmerge";
import { jsRules } from "./overrides/lang-specific.ts";
import { vueBase } from "./overrides/vue.ts";

export default deepmerge(vueBase, {
  overrides: [
    deepmerge(jsRules, {
      files: [ "*.vue" ],
      parser: "vue-eslint-parser",
    }),
  ],
});
