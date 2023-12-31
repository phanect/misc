import deepmerge from "deepmerge";
import plain from "./plain.js";

export default deepmerge(plain, {
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
