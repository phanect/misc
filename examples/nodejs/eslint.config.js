import { core, nodejs } from "eslint-config-phanective";

/** @type { import("eslint").Linter.Config[] } */
export default [
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
