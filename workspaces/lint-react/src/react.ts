import { cwd } from "node:process";
import { defineConfig } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import type { Linter } from "eslint";

export const react: Linter.Config[] = defineConfig([{
  files: [ "**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}" ],

  ...reactPlugin.configs.flat.recommended,
  ...reactPlugin.configs.flat["jsx-runtime"],
  ...jsxA11yPlugin.flatConfigs.recommended,

  languageOptions: {
    ...reactPlugin.configs.flat.recommended.languageOptions,

    globals: {
      ...globals.browser,
      ...globals.serviceworker,
    },

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  plugins: {
    react: reactPlugin,
    "react-hooks": hooksPlugin,
    "jsx-a11y": jsxA11yPlugin,
  },
  rules: {
    ...hooksPlugin.configs.recommended.rules,
    "react/jsx-filename-extension": [ "error", { extensions: [ ".jsx", ".tsx" ]}],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-ambiguous-text": [ "error", {
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
  },
}]);

const compat = new FlatCompat({
  baseDirectory: cwd(),
});

export const nextjs: Linter.Config[] = defineConfig([
  ...react,
  ...compat.extends("plugin:@next/next/core-web-vitals"),
]);
