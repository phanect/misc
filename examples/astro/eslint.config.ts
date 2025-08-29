import { defineConfig } from "eslint/config";
import { core } from "@phanect/lint";
import { astro } from "@phanect/lint-astro";

const configs = defineConfig([
  ...core,
  ...astro,
  {
    languageOptions: {
      parserOptions: {
        // Do not use `projectService` because it causes error.
        // https://github.com/ota-meshi/astro-eslint-parser/issues/331
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);

export default configs;
