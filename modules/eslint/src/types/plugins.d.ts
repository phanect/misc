declare module "eslint-plugin-promise" {
  import type { ESLint } from "eslint"

  const mod: {
    configs: {
      "flat/recommended": ESLint.Config,
    },
  }

  export default mod;
}

declare module "eslint-plugin-vue" {
  import type { ESLint } from "eslint"

  const mod: {
    configs: {
      "flat/recommended": ESLint.Config[],
    },
  }

  export default mod;
}
