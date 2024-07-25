import promise from "eslint-plugin-promise";
import { jsConfigs, tsConfigs } from "./overrides/lang-specific.ts";
import { ignoreConfigs } from "./overrides/ignores.ts";
import { jsonConfigs } from "./overrides/json.ts";
import { vitestConfigs } from "./overrides/vitest.ts";
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
  ...vitestConfigs,
  ...jsonConfigs,
  vitestWorkaroundConfig,
] as const;

export default plain;
