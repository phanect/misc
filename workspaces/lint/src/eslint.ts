import globals from "globals";
import { jsonConfigs } from "./configs/json.ts";
import { commonConfigs, jsConfigs, tsConfigs } from "./configs/languages.ts";
import { devConfigs } from "./configs/nodejs.ts";
import { vitestConfigs } from "./configs/vitest.ts";
import type { Linter } from "eslint";
import type { CodeExtensions } from "./utils.ts";

export const core: Linter.Config[] = [
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

export const vanilla: Linter.Config[] = [{
  files: [
    "**/*.js",
    "**/*.mjs",
    "**/*.ts",
    "**/*.mts",
  ],
  languageOptions: {
    globals: globals.browser,
  },
}];

export {
  nodejsConfigs as nodejs,
  unbundledConfigs as unbundled,
} from "./configs/nodejs.ts";

// Used in other @phanect/lint-* packages
export type { CodeExtensions };
