declare module "eslint-plugin-promise" {
  import type { Linter } from "eslint";

  const mod: {
    configs: {
      "flat/recommended": Linter.Config;
    };
  };

  export default mod;
}
