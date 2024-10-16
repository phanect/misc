import astroPlugin from "eslint-plugin-astro";
import type { Linter } from "eslint";

export const astro: Linter.Config[] = [
  ...astroPlugin.configs.recommended,
  ...astroPlugin.configs["jsx-a11y-recommended"],
  {
    files: [ "**/*.astro" ],
    languageOptions: {
      parserOptions: {
        // `projectService: true` does not work properly with Astro ruleset.
        // Using `project: true` instead.
        projectService: false,
        project: true,
      },
    },
    rules: {
      // For performance
      "astro/no-unused-css-selector": "error",

      //
      // jsx-a11y
      //
      "astro/jsx-a11y/anchor-ambiguous-text": [ "error", {
        words: [
          // Defaults
          "click here",
          "here",
          "link",
          "a link",
          "learn more",

          // Japanese
          "ここをクリック",
          "ここをタップ",
          "ここ",
          "こちらをクリック",
          "こちらをタップ",
          "こちら",
          "リンク",
          "詳細",
        ],
      }],

      // Disallow `set:html`.
      // I'm not sure if I have chance to use `set:html`, so disallow it for now.
      "astro/no-set-html-directive": "warn",

      //
      // Stylistic
      //
      "astro/prefer-class-list-directive": "warn",
      "astro/prefer-split-class-list": "warn",

      "@stylistic/semi": "off",
      "astro/semi": [ "error", "always" ],
    },
  } satisfies Linter.Config,
  {
    files: [ "**/env.d.ts" ],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
