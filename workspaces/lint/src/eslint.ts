import { defineConfig } from "eslint/config";
import globals from "globals";
import { jsonConfigs } from "./configs/json.ts";
import { commonConfigs, jsConfigs, tsConfigs } from "./configs/languages.ts";
import { devConfigs } from "./configs/nodejs.ts";
import { vitestConfigs } from "./configs/vitest.ts";
import type { CodeExtensions } from "./utils.ts";

export const core = defineConfig([
  {
    ignores: [
      "package-lock.json",
      "npm-shrinkwrap.json",
      ".astro/",
      ".next/",
      "next-env.d.ts",
      ".nuxt/",
      ".svelte-kit/",
      "build/",
      "dist/",
      "out/",
      "tmp/",
    ],
  },
  {
    files: [ "**/*" ],
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error",
    },
  },
  ...jsConfigs,
  ...tsConfigs,
  ...commonConfigs,
  ...devConfigs,
  ...vitestConfigs,
  ...jsonConfigs,
]);

export const vanilla = defineConfig([{
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
