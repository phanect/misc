import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import { vueBase } from "./vue.ts";
import type { Linter } from "eslint";

export const nuxtBase: Linter.Config[] = [
  ...vueBase,
  ...(
    await createConfigForNuxt({
      features: {
        standalone: true,
      }
    })
  )
];
