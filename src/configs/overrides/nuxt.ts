import { vueBase } from "./vue.ts";
import { mergeConfigs } from "../../helpers.ts";
import type { Linter } from "eslint";

export const nuxtBase: Linter.Config = mergeConfigs(vueBase, {
  extends: [ "@nuxt/eslint-config" ],
});
