import { nuxtTS } from "eslint-config-phanective";

/** @type { import("eslint").Linter.Config[] } */
const config = [
  {
    ignores: [
      ".nuxt/**",
      ".output/**",
    ],
  },
  ...nuxtTS,
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
