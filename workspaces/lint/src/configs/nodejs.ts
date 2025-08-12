import n from "eslint-plugin-n";
import globals from "globals";
import type { Linter } from "eslint";
import type { CodeExtensions } from "../utils.ts";

const latestNodejsLtsVersion = 24;

const devConfigPatterns: string[] = [
  ".config/*.@(js|mjs|ts|mts|jsx|tsx)", // ./config/ directory proposal by @pi0 https://github.com/pi0/config-dir
  "**/*.config.@(js|mjs|ts|mts|jsx|tsx)",
  // build scripts
  "**/script/**/*.@(js|mjs|ts|mts|jsx|tsx)",
  "**/scripts/**/*.@(js|mjs|ts|mts|jsx|tsx)",
  // testcases
  "**/test/**/*.@(js|mjs|ts|mts|jsx|tsx)",
  "**/tests/**/*.@(js|mjs|ts|mts|jsx|tsx)",
  "**/spec/**/*.@(js|mjs|ts|mts|jsx|tsx)",
  "**/specs/**/*.@(js|mjs|ts|mts|jsx|tsx)",
  "**/*.test.@(js|mjs|ts|mts|jsx|tsx)",
  "**/*.spec.@(js|mjs|ts|mts|jsx|tsx)",
];

export const nodejsConfigs: Linter.Config[] = [
  n.configs["flat/recommended-module"],

  {
    rules: {
      //
      // Errors
      //

      // Use `throw new Error()` instead of `process.exit(1)` as the official doc recommends
      // https://nodejs.org/docs/latest-v22.x/api/process.html#process_process_exit_code
      "n/no-process-exit": "error",

      "n/no-unsupported-features/node-builtins": [ "error", {
        allowExperimental: true,
      }],

      // Use global one for standard JavaScript APIs.
      "n/prefer-global/console": "error",
      "n/prefer-global/text-decoder": "error",
      "n/prefer-global/text-encoder": "error",
      "n/prefer-global/url": "error",
      "n/prefer-global/url-search-params": "error",

      // Import or require Node.js-specific APIs.
      "n/prefer-global/buffer": [ "error", "never" ],
      "n/prefer-global/process": [ "error", "never" ],

      "n/prefer-node-protocol": "error", // Prefer `import { ... } from "node:fs"` to `"fs"`
      "n/prefer-promises/dns": "error",
      "n/prefer-promises/fs": "error",

      //
      // Off
      //

      // Duplicate of import/no-unresolved
      "n/no-missing-import": "off",

      // This rule also forbids user-defined functions endswith `Sync`
      "n/no-sync": "off",

      // Only enable these rules on `phanective/with-deps` ruleset
      "n/no-extraneous-import": "off",
      "n/no-unpublished-import": "off",
      "n/no-unpublished-require": "off",
    },
  } satisfies Linter.Config,
].map((config) => ({
  ...config,

  // Since Node.js library might be used for server side rendering,
  // the extensions for frontend frameworks (e.g. *.svelte) is listed here.
  files: [
    "**/*.js",
    "**/*.mjs",
    "**/*.jsx",
    "**/*.ts",
    "**/*.mts",
    "**/*.tsx",
    "**/*.vue",
    "**/*.svelte",
    "**/*.astro",
  ] as CodeExtensions,
  ignores: devConfigPatterns,

  languageOptions: {
    globals: globals.node,
  },
}));

export const devConfigs: Linter.Config[] = [
  ...nodejsConfigs.map((config) => ({
    ...config,
    files: devConfigPatterns,
    ignores: [],
  })),

  {
    files: devConfigPatterns,
    plugins: {
      n,
    },
    rules: {
      "n/no-unsupported-features/node-builtins": [ "error", {
        version: `>=${ latestNodejsLtsVersion }`,
        allowExperimental: true,
      }],
      "n/no-extraneous-import": "off",
    },
  },
];

export const unbundledConfigs: Linter.Config[] = [{
  files: [
    "**/*.js",
    "**/*.mjs",
    "**/*.jsx",
    "**/*.ts",
    "**/*.mts",
    "**/*.tsx",
    "**/*.vue",
    "**/*.svelte",
    "**/*.astro",
  ] as CodeExtensions,
  ignores: devConfigPatterns,

  plugins: {
    n,
  },

  rules: {
    "n/no-extraneous-import": "error",
    "n/no-unpublished-import": "error",
    "n/no-unpublished-require": "error",
  },
}];
