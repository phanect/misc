import { configs as nodeConfigs } from "eslint-plugin-n";
import { plain } from "./plain.ts";
import { vitestWorkaroundConfig } from "./vitest-workaround.js";
import type { EsmExtensions } from "../../../../src/utils.ts";
import type { Linter } from "eslint";

const nodejsRules = {
  //
  // Errors
  //
  // Use `throw new Error()` instead of `process.exit(1)` as the official doc recommends
  // https://nodejs.org/docs/latest-v22.x/api/process.html#process_process_exit_code
  "n/no-process-exit": "error",

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

  // Only enable these rules on `phanective/with-deps` ruleset
  "n/no-unpublished-import": "off",
  "n/no-unpublished-require": "off",
};

export const cjsConfig: Linter.FlatConfig = {
  ...nodejs["flat/recommended-script"],
  files: [ "*.cjs" ],

  languageOptions: {
    sourceType: "commonjs",
  },
  rules: {
    "import-x/no-unresolved": [ "error", { commonjs: true }],
  },
} as Linter.FlatConfig;

export const nodejsConfigs = [
...plain,
  cjsConfig,
  {
    files: [
      "*.js",
      "*.mjs",
      "*.jsx",
      "*.ts",
      "*.mts",
      "*.tsx",
      "*.vue",
      "*.svelte",
    ] as EsmExtensions,
    ...nodejs["flat/recommended-module"],
  },
];

const devConfigsEsm = [
  nodejs["flat/recommended-module"],
  {
    rules: nodejsRules,
  },
].map(config => ({
  ...config,
  files: [
    // config files
    ".config/", // ./config/ directory proposal by @pi0 https://github.com/pi0/config-dir
    "*.config.*",
    ".eslintrc",
    ".eslintrc.*",
    // build scripts
    "script/**",
    "scripts/**",
    // testcases
    "test/**",
    "tests/**",
    "*.test.*",
    "*.spec.*",
  ],
  ignores: [ "*.cjs" ],
})) as Linter.FlatConfig[];

export const devConfigs = [
  ...devConfigsEsm,
  cjsConfig,
] as Linter.FlatConfig[];
