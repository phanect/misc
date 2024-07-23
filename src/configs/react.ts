import { FlatCompat } from "@eslint/eslintrc";
import { configs as reactConfigs } from "eslint-plugin-react";
import plain from "./plain.ts";
import { extensions, projectRoot } from "../utils.ts";
import type { Linter } from "eslint";

const compat = new FlatCompat({
  baseDirectory: projectRoot,
  resolvePluginsRelativeTo: projectRoot,
});

export const react: Linter.FlatConfig[] = [
  ...plain,
  reactConfigs.flat.recommended,
  {
    files: extensions,
    rules: {
      "react/jsx-filename-extension": [ "error", { extensions: [ ".jsx", ".tsx" ]}],
      "react/react-in-jsx-scope": "off",
    },
  },
  ...compat.config({
    extends: [
      "plugin:react-hooks/recommended",
    ],
    plugins: [ "react-hooks" ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  }),
];
