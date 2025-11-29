import { core } from "@phanect/lint";
import { nuxt, vue } from "@phanect/lint-vue";
import { defineConfig, globalIgnores } from "eslint/config";

const configs = defineConfig([
  globalIgnores([
    ".nuxt/**",
    ".output/**",
  ]),

  {
    extends: [
      core,
      vue,
      nuxt,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);

export default configs;
