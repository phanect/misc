import { vueBase } from "./components/vue.ts";
import plain from "./plain.ts";
import type { Linter } from "eslint";

export const vueTS: Linter.Config[] = [
  ...plain,
  ...vueBase,
];
