"use strict";

const base = require("./_base");
const { mergeConfigs } = require("../helpers");

module.exports = mergeConfigs(base("js"), {
  extends: [
    "eslint:recommended",
  ],
  rules: {
    // This rule also disallows "use strict"; in module-based code including TypeScript.
    // You can still add "use strict"; in each source TypeScript code,
    // so I enable this rule only for JavaScript
    strict: [ "error", "safe" ],
  },
});
