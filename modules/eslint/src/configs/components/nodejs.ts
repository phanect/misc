import n from "eslint-plugin-n";
import type { Linter } from "eslint";
import type { CodeExtensions } from "../../utils.ts";

const nodejsGlobalConfig: Linter.Config = {
  // Since Node.js library might be used for server side rendering,
  // the extensions for frontend frameworks (e.g. *.svelte) is listed here.
  files: [
    "*.js",
    "*.mjs",
    "*.cjs",
    "*.jsx",
    "*.ts",
    "*.mts",
    "*.cts",
    "*.tsx",
    "*.vue",
    "*.svelte"
  ] as CodeExtensions,
  plugins: {
    n,
  },

  rules: {
  //
  // Errors
  //

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

  // Duplicate of import-x/no-unresolved
  "n/no-missing-import": "off",

  "n/no-process-exit": "off",

  // Only enable these rules on `phanective/with-deps` ruleset
  "n/no-unpublished-import": "off",
  "n/no-unpublished-require": "off",
  },
};

const esmConfigs: Linter.Config[] = [
  n.configs["flat/recommended-module"],
  {
    rules: {
      "n/no-unpublished-import": "off",
      "n/no-unpublished-require": "off",
    },
  } satisfies Linter.Config,
].map((config) => ({
  ...config,
  files: [
    "*.js",
    "*.mjs",
    "*.jsx",
    "*.ts",
    "*.tsx",
    "*.vue",
  ],
}));

const cjsConfigs: Linter.Config[] = [
  n.configs["flat/recommended-script"],
  {
    languageOptions: {
      sourceType: "commonjs",
    },
  } satisfies Linter.Config,
].map((config) => ({
  ...config,
  files: [ "*.cjs" ],
}));

export const nodejsConfigs: Linter.Config[] = [
  ...esmConfigs,
  ...cjsConfigs,
  nodejsGlobalConfig,
];
