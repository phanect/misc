import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig, globalIgnores } from "eslint/config";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import type { Linter } from "eslint";

export const react: Linter.Config[] = defineConfig([{
  files: [ "**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}" ],

  extends: [
    reactPlugin.configs.flat.recommended ?? {},
    reactPlugin.configs.flat["jsx-runtime"] ?? {},
    hooksPlugin.configs.flat.recommended,
    jsxA11yPlugin.flatConfigs.recommended,
  ],

  languageOptions: {
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
  },
  rules: {
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

export const nextjs: Linter.Config[] = defineConfig([
  {
    files: [
      "**/*.js",
      "**/*.mjs",
      "**/*.jsx",
      "**/*.ts",
      "**/*.mts",
      "**/*.tsx",
    ],
    extends: [
      react,
      nextPlugin.configs["core-web-vitals"],
    ],
  },

  globalIgnores([
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    "**/next-env.d.ts",
  ]),
]);
