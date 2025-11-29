import { core } from "@phanect/lint";
import { astro } from "@phanect/lint-astro";
import { defineConfig } from "eslint/config";

const configs = defineConfig([
  {
    extends: [
      core,
      astro,
    ],
    languageOptions: {
      parserOptions: {
        // Do not use `projectService` because it causes error.
        // https://github.com/ota-meshi/astro-eslint-parser/issues/331
        projectService: false,
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);

export default configs;
