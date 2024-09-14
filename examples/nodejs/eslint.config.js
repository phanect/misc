import { node } from "eslint-config-phanective";

/** @type { import("eslint").Linter.Config[] } */
export default [
  ...node,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
