import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import type { Linter } from "eslint";

export const react: Linter.Config[] = [
  reactPlugin.configs.flat.recommended as Linter.Config,
  reactPlugin.configs.flat["jsx-runtime"] as Linter.Config,
  // TODO eslint-plugin-react-hooks
  jsxA11yPlugin.flatConfigs.recommended as Linter.Config,

  {
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
  } satisfies Linter.Config,
].map((config) => ({
  ...config,
  files: [ "**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}" ],
}));

/** TODO Not working until @next/eslint-plugin-next supports flat config & ESLint v9+ */
// export const next = {
//   extends: [ "next/core-web-vitals" ],
// };
