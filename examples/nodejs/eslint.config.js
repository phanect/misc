import { core, nodejs } from "@phanect/lint";

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
