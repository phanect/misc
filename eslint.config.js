import { node, vitestWorkaroundConfig } from "./dist/eslint.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...node,
  {
    files: [ "*" ],

    ignores: [
      "tests/fixtures/invalid/**",
    ],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ...vitestWorkaroundConfig,
    files: [
      "tests/fixtures/**/*.test.*",
    ],
  },
];
