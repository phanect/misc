import { defineConfig } from "eslint/config";
import { core, nodejs } from "@phanect/lint";

const configs = defineConfig([
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
]);

export default configs;
