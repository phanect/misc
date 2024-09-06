import plain, { node } from "eslint-config-phanective";

/** @type { import("eslint").Linter.Config[] } */
export default [
  ...plain,
  ...node,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
