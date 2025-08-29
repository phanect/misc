import { defineConfig } from "eslint/config";
import { core } from "@phanect/lint";
import { vue, nuxt } from "@phanect/lint-vue";

const configs = defineConfig([
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
]);

export default configs;
