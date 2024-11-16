declare module "eslint-plugin-react-hooks" {
  import type { ESLint, Linter } from "eslint";

  const mod: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord;
      };
    };
  };

  export default mod;
}
