import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export const nuxtBase = createConfigForNuxt({
  features: {
    stylistic: true,
  }
});
