import deepmerge from "deepmerge";
import { jsRules } from "./overrides/lang-specific.ts";
import { nuxtBase } from "./overrides/nuxt.ts";

export default deepmerge(nuxtBase, {
  overrides: [
    deepmerge(jsRules, {
      files: [ "*.vue" ],
      parser: "vue-eslint-parser",
    }),
  ],
});
