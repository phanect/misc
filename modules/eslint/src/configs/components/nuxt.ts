import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import type { Linter } from "eslint";

export const nuxtBase: Linter.Config[] = await createConfigForNuxt({
  features: {
    standalone: true,
  },
});
