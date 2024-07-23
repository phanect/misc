import type { Linter } from "eslint";

export const nuxtBase: Linter.FlatConfig = {
  rules: {
    "nuxt/prefer-import-meta": "error",
  }
}
