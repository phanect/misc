import { core } from "@phanect/lint";
import { astro } from "@phanect/lint-astro";
import type { Linter } from "eslint";

const configs: Linter.Config[] = [
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
];

export default configs;
