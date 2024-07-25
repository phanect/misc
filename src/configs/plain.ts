import promise from "eslint-plugin-promise";
import { jsConfigs, tsConfigs } from "./overrides/lang-specific.ts";
import { ignoreConfigs } from "./overrides/ignores.ts";
import { jsonConfigs } from "./overrides/json.ts";
import { vitestConfigs } from "./overrides/vitest.ts";
import type { Linter } from "eslint";

const plain: Linter.FlatConfig[] = [
  ...ignoreConfigs,
  ...jsConfigs,
  ...tsConfigs,
  promise.configs["flat/recommended"],
  // TODO add import-x, editorconfig, and document-write plugins when it is ready to flat configs
  //importConfigs["flat/recommended"],
  //editorConfigConfigs["recommended"],
  //docWriteConfigs["recommended"],
  {
    files: [ "*.cjs" ],
    languageOptions: {
      sourceType: "commonjs",
    },
    rules: {
      "import-x/no-unresolved": [ "error", { commonjs: true }],
    },
  },
  ...vitestConfigs,
  ...jsonConfigs,
] as const;

export default plain;
