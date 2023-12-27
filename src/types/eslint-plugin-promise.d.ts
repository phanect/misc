declare module "eslint-plugin-promise" {
  import type { ESLint } from "eslint"

  const mod = {
    configs: {
      "flat/recommended": ESLint.FlatConfig,
    },
  }

  export default mod;
}
