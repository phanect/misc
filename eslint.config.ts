import { core, nodejs } from "@phanect/lint";
import { defineConfig, globalIgnores } from "eslint/config";

const configs = defineConfig([
  globalIgnores([
    "**/.tsup/**",
    "**/dist/**",
    "**/tmp/**",
    "examples/**", // Run ESLint command in each module directories
    "tests/fixtures/invalid/**",
  ]),
  ...core,
  ...nodejs,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: [ "**/tsconfig.*.json" ],

    rules: {
      "jsonc/no-comments": "off",
    },
  },
]);

export default configs;
