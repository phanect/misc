"use strict";

module.exports = {
  getLangSpecificRules: (jsRules, lang) => {
    if (lang === "js") {
      return jsRules;
    } else if (lang === "ts") {
      const tsRules = {};

      for (const [ ruleid, options ] of Object.entries(jsRules)) {
        tsRules[`@typescript-eslint/${ruleid}`] = options;
      }

      return tsRules;
    } else {
      throw new Error(`Unsupported Language ${lang}: only "js" and "ts" are supported.`);
    }
  },
};
