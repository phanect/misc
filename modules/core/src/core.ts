import promise from "eslint-plugin-promise";
import { jsConfigs, tsConfigs } from "./configs/defaults.ts";
import { ignoreConfigs } from "./configs/ignores.ts";
import { jsonConfigs } from "./configs/json.ts";
import { devConfigs } from "./configs/nodejs.ts";
import { vitestConfigs } from "./configs/vitest.ts";
import type { Linter } from "eslint";

export const configs: Linter.FlatConfig[] = [
  ...ignoreConfigs,
  ...jsConfigs,
  ...tsConfigs,
  promise.configs["flat/recommended"],
  // TODO add import-x, editorconfig, and document-write plugins when it is ready to flat configs
  //importConfigs["flat/recommended"],
  //editorConfigConfigs["recommended"],
  //docWriteConfigs["recommended"],
  ...devConfigs,
  ...vitestConfigs,
  ...jsonConfigs,
] as const;
