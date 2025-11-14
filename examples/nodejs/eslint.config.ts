import { core, nodejs } from "@phanect/lint";
import { defineConfig } from "eslint/config";

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
