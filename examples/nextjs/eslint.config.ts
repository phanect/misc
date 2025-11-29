import { core } from "@phanect/lint";
import { nextjs } from "@phanect/lint-react";
import { defineConfig } from "eslint/config";

const configs = defineConfig([
  {
    extends: [
      core,
      nextjs,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);

export default configs;
