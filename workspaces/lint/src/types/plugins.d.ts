declare module "eslint-plugin-promise" {
  import type { Linter } from "eslint";

  const mod: {
    configs: {
      "flat/recommended": Linter.Config;
    };
  };

  export default mod;
}

declare module "eslint-plugin-import" {
  import type { ESLint, Linter } from "eslint";

  const mod: ESLint.Plugin & {
    flatConfigs: {
      recommended: Linter.Config;

      errors: Linter.Config;
      warnings: Linter.Config;

      typescript: Linter.Config;
      react: Linter.Config;
      "react-native": Linter.Config;
      electron: Linter.Config;
    };
  };

  export default mod;
}
