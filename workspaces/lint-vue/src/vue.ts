import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import vuePlugin from "eslint-plugin-vue";
import { parser as tsParser } from "typescript-eslint";
import type { Linter } from "eslint";

export const vue: Linter.Config[] = [
  ...vuePlugin.configs["flat/recommended"],
  {
    files: [ "**/*.vue" ],
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        extraFileExtensions: [ ".vue" ],
        parser: tsParser,
      },
    },
    rules: {
      //
      // Warnings
      //
      "vue/html-self-closing": [ "warn", { html: { void: "always", normal: "never", component: "always" }}],
      "vue/max-attributes-per-line": [ "warn", {
        singleline: 7,
        multiline: { max: 2 },
      }],

      //
      // Off
      //
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
      "vue/singleline-html-element-content-newline": "off",
    },
  } satisfies Linter.Config,
];

export const nuxt: Linter.Config[] = await createConfigForNuxt({
  features: {
    standalone: true,
  },
});
