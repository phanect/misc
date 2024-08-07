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
    files: [ "*" ],

    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

export default config;
