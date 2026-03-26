import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { jsonConfigs } from "./configs/json.ts";
import { commonConfigs, jsConfigs, tsConfigs } from "./configs/languages.ts";
import { devConfigs } from "./configs/nodejs.ts";
import { vitestConfigs } from "./configs/vitest.ts";
import type { Linter } from "eslint";
import type { CodeExtensions } from "./utils.ts";

export const core: Linter.Config[] = defineConfig([
  globalIgnores([
    "package-lock.json",
    "npm-shrinkwrap.json",
    ".svelte-kit/",
    "build/",
    "dist/",
    "tmp/",
  ]),
  {
    files: [ "**/*" ],
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error",
    },
  },
  {
    extends: [
      jsConfigs,
      tsConfigs,
      commonConfigs,
      devConfigs,
      vitestConfigs,
      jsonConfigs,
    ],
  },
]);

export const vanilla: Linter.Config[] = defineConfig([{
  files: [
    "**/*.js",
    "**/*.mjs",
    "**/*.ts",
    "**/*.mts",
  ],
  languageOptions: {
    globals: globals.browser,
  },
}]);

export {
  nodejsConfigs as nodejs,
  unbundledConfigs as unbundled,
} from "./configs/nodejs.ts";

export { cssConfigs as css } from "./configs/css.ts";

// Used in other @phanect/lint-* packages
export type { CodeExtensions };
