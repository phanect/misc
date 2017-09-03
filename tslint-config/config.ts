export = {
  "extends": "tslint-eslint-rules",
  "rules": {
    "eofline": true, // Not warning to keep diff in commit log readable
    "indent": [true, "spaces", 2],
    "no-trailing-whitespace": true, // Not warning to keep diff in commit log readable
    "no-var-keyword": true,
    "ter-indent": [true, 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }}],
    "trailing-comma": [true, {"multiline": "always"}],

    // Not supported in TSLint
    // "no-whitespace-before-property": "error",
    // "unicode-bom": ["error", "never"],

    //
    // Warnings - warning is not supported by TSLint, but for compatibility with ESLint
    // These are just a preference in coding style.
    // Following rules doesn't reduce quality or readability
    //
    "brace-style": [true, "1tbs" ],
    "comment-format": [true, "check-space"],
    "newline-before-return": true,
    "no-multi-spaces": true,
    "quotemark": [true, "double", "avoid-escape"],
    "space-in-parens": [true, "never"],
    "ter-prefer-arrow-callback": true,

    // Not supported in TSLint
    // "padding-line-between-statements": [
    //   "warn",
    //   { blankLine: "always", prev: "const", next: "*" },
    //   { blankLine: "always", prev: "let", next: "*" },
    //   { blankLine: "always", prev: "var", next: "*" },
    // ],
    // "one-var-declaration-per-line": ["warn", "initializations"],
    // "space-before-blocks": ["warn", "always"],
    // "space-before-function-paren": ["warn", {
    //   "anonymous": "never",
    //   "named": "never",
    //   "asyncArrow": "always",
    // }],
    // "switch-colon-spacing": ["warn", { "before": false, "after": true }],
  },
};
