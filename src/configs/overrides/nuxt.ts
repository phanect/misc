import deepmerge from "deepmerge";
import { vueBase } from "./vue.js";

export const nuxtBase = deepmerge(vueBase, {
  extends: [ "@nuxt/eslint-config" ],
});
