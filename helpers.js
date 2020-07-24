"use strict";

const mergeWith = require("lodash.mergewith");
const cloneDeep = require("lodash.clonedeep");

module.exports = {
  toTSRules: (jsRules) => {
    const tsRules = {};

    for (const [ ruleid, options ] of Object.entries(jsRules)) {
      tsRules[`@typescript-eslint/${ruleid}`] = options;
    }

    return tsRules;
  },
  mergeConfigs: (config1, config2) => {
    const _config1 = cloneDeep(config1);

    return mergeWith(_config1, config2, (a, b) => {
      if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b);
      }
    });
  },
};
