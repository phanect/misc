import deepmerge from "deepmerge";
import plain from "./plain.ts";

export default deepmerge(plain, {
  extends: [ "plugin:node/recommended" ],
  plugins: [ "node" ],
  rules: {
    //
    // Errors
    //
    // While it is disabled on base config, it is enabled here since it works on Node
    "import/no-unresolved": [ "error", { commonjs: true }],
    "node/no-missing-import": [ "error", {
      tryExtensions: [ ".js", ".ts", ".json" ], // Add .ts
    }],

    //
    // Off
    //
    "no-process-exit": "off",
    "node/no-process-exit": "off",
  },
  overrides: [
    {
      files: [
        // config files
        "*.config.*",
        ".eslintrc",
        ".eslintrc.*",
        // build scripts
        "script/**",
        "scripts/**",
        // testcases
        "test/**",
        "tests/**",
        "*.test.*",
        "*.spec.*",
      ],
      rules: {
        "node/no-unpublished-import": "off",
        "node/no-unpublished-require": "off",
      },
    },
  ],
});
