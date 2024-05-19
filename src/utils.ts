import type { Linter } from "eslint";

export const toTSRules = (jsRules: Linter.RulesRecord): Linter.RulesRecord => {
  const tsRules: Linter.RulesRecord = {};

  for (const [ ruleid, options ] of Object.entries(jsRules)) {
    tsRules[`@typescript-eslint/${ruleid}`] = options;
  }

  return tsRules;
};
