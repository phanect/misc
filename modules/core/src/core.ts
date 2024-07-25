import promise from "eslint-plugin-promise";
import { jsConfigs, tsConfigs } from "./configs/defaults.ts";
import { ignoreConfigs } from "./configs/ignores.ts";
import { jsonConfigs } from "./configs/json.ts";
import { vitestConfigs } from "./configs/vitest.ts";
import type { Linter } from "eslint";
import { vitestWorkaroundConfig } from "./vitest-workaround.js";

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
  vitestWorkaroundConfig,
] as const;

export default plain;
