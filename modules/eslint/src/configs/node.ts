import { nodejsConfigs } from "./components/nodejs.ts";
import type { Linter } from "eslint";

export const node: Linter.Config[] = [
  {
    // Import from devDependencies should be allowed for scripts used in local development.
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
    rules: {
      "n/no-unpublished-import": "off",
      "n/no-unpublished-require": "off",
    },
  },
  ...nodejsConfigs,
];
