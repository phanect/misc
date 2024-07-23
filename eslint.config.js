import { node } from "./dist/eslint.mjs";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    ignores: [
      "tests/fixtures/invalid/**",
    ],
  },
  ...node,
  {
    files: [ "*" ],

    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
