import { core, nodejs } from "@phanect/lint";
import type { Linter } from "eslint";

const configs: Linter.Config[] = [
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

export default configs;
