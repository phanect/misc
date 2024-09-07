import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import type { Linter } from "eslint";

export const nuxt: Linter.Config[] = await createConfigForNuxt({
  features: {
    standalone: true,
  },
});
