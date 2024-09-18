import { core } from "eslint-config-phanective";
import { vue, nuxt } from "eslint-config-phanective/vue";

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
