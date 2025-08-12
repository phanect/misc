import { core } from "@phanect/lint";
import { vue, nuxt } from "@phanect/lint-vue";
import type { Linter } from "eslint";

const configs: Linter.Config[] = [
  {
    ignores: [
      ".nuxt/**",
      ".output/**",
    ],
  },
  ...core,
  ...vue,
  ...nuxt,
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
