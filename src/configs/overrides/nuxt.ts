import deepmerge from "deepmerge";
import { vueBase } from "./vue.ts";
import type { Linter } from "eslint";

export const nuxtBase: Linter.Config = deepmerge(vueBase, {
  extends: [ "@nuxt/eslint-config" ],
});
