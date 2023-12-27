import { nuxtBase } from "./overrides/nuxt.ts";
import plain from "./plain.ts";
import type { Linter } from "eslint";

export const nuxtJS: Linter.Config[] = [
  ...plain,
  ...nuxtBase,
];
