import { core, nodejs } from "@phanect/lint";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    ignores: [
      "**/.tsup/**",
      "**/dist/**",
      "**/tmp/**",
      "examples/**", // Run ESLint command in each module directories
      "tests/fixtures/invalid/**",
    ],
  },
  ...core,
  ...nodejs,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
