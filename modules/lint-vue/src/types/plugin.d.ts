declare module "eslint-plugin-vue" {
  import type { Linter } from "eslint";

  const mod: {
    configs: {
      "flat/recommended": Linter.Config[];
    };
  };

  export default mod;
}
