import { core } from "@phanect/lint";
import { nuxt, vue } from "@phanect/lint-vue";
import { defineConfig } from "eslint/config";

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
