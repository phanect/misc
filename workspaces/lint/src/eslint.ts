import { jsonConfigs } from "./configs/json.ts";
import { commonConfigs, jsConfigs, tsConfigs } from "./configs/languages.ts";
import { devConfigs } from "./configs/nodejs.ts";
import { vitestConfigs } from "./configs/vitest.ts";
import type { Linter } from "eslint";

export const core: Linter.Config[] = [
  {
    ignores: [
      "package-lock.json",
      "npm-shrinkwrap.json",
      ".svelte-kit/",
      "dist/",
      "tmp/",
    ],
  } satisfies Linter.Config,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
  } satisfies Linter.Config,
  {
    files: [ "**/*" ],
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error",
    },
  } satisfies Linter.Config,
  ...jsConfigs,
  ...tsConfigs,
  ...commonConfigs,
  ...devConfigs,
  ...vitestConfigs,
  ...jsonConfigs,
] as const;

export {
  nodejsConfigs as nodejs,
  unbundledConfigs as unbundled,
} from "./configs/nodejs.ts";

// Used in other @phanect/lint-* packages
export type { CodeExtensions } from "./utils.ts";
