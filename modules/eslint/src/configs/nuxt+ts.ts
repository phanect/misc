import { nuxtBase } from "./components/nuxt.ts";
import type { Linter } from "eslint";

export const nuxtTS: Linter.Config[] = [
  ...nuxtBase,
];
