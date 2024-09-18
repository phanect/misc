import { core } from "@phanect/lint";
import { vue, nuxt } from "@phanect/lint-vue";

/** @type { import("eslint").Linter.Config[] } */
const config = [
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

export default config;
