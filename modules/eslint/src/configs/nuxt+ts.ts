import { nuxtBase } from "./components/nuxt.ts";
import plain from "./plain.ts";
import type { Linter } from "eslint";

export const nuxtTS: Linter.Config[] =  [
  ...plain,
  ...nuxtBase,
];
