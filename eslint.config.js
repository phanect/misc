import { core, nodejs } from "@phanect/lint";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    ignores: [
      "**/dist/**",
      "examples/**", // Run ESLint command in each module directories
      "tests/fixtures/invalid/**",
    ],
  },
  ...core,
  ...nodejs,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
