import { createConfigForNuxt } from "@nuxt/eslint-config";
import { defineConfig } from "eslint/config";
import vuePlugin from "eslint-plugin-vue";
import globals from "globals";
import { parser as tsParser } from "typescript-eslint";
import type { Linter } from "eslint";

export const vue: Linter.Config[] = defineConfig([
  {
    extends: [
      vuePlugin.configs["flat/recommended"],
    ],
  },
  {
    files: [ "**/*.vue" ],
    languageOptions: {
      globals: globals.browser,
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
  },
]);

export const nuxt = defineConfig([
  {
    extends: [ vue ],
  },
  ...(
    await createConfigForNuxt({
      features: {
        standalone: true,
        import: false, // not compatible with eslint-plugin-import
      },
    })
  ),
]);
