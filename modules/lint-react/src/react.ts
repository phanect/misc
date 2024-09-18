import deepmerge from "deepmerge";
import { core } from "../../eslint/src/eslint.ts";

export const react = deepmerge(core, {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [ "react", "react-hooks" ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-filename-extension": [ "error", { extensions: [ ".jsx", ".tsx" ]}],
    "react/react-in-jsx-scope": "off",
  },
});

export const next = deepmerge(react, {
  extends: [ "next/core-web-vitals" ],
});
