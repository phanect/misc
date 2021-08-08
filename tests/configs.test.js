"use strict";

const { CLIEngine } = require("eslint");
const { join } = require("path");

const { mergeConfigs } = require("../src/helpers");
const { configs } = require("../lib/config");
const { sortObjects } = require("./testutils");

test("js - valid", () => {
  const results = new CLIEngine({
    baseConfig: mergeConfigs(configs.plain, {
      env: {
        node: true,
      },
    }),
    useEslintrc: false,
  }).executeOnFiles(join(__dirname, "js/correct.js")).results;

  expect(results[0].messages).toHaveLength(0);
  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(0);
  expect(results[0].warningCount).toBe(0);
});

test("js - invalid", () => {
  const results = new CLIEngine({
    baseConfig: mergeConfigs(configs.plain, {
      env: {
        node: true,
      },
    }),
    useEslintrc: false,
  }).executeOnFiles(join(__dirname, "js/incorrect.js")).results;

  expect(sortObjects(results[0].messages)).toEqual(sortObjects([
    {
      column: 1,
      endColumn: 2,
      endLine: 18,
      line: 3,
      message: "Use the global form of 'use strict'.",
      messageId: "global",
      nodeType: "Program",
      ruleId: "strict",
      severity: 2,
    },
    {
      column: 1,
      endColumn: 9,
      endLine: 7,
      fix: {
        range: [ 102, 110 ],
        text: `;
      const `,
      },
      line: 3,
      message: "Split 'const' declarations into multiple statements.",
      messageId: "split",
      nodeType: "VariableDeclaration",
      ruleId: "one-var",
      severity: 1,
    },
    {
      column: 1,
      endColumn: 7,
      fix: {
        range: [ 104, 110 ],
        text: "  ",
      },
      line: 4,
      endLine: 4,
      message: "Expected indentation of 2 spaces but found 6.",
      messageId: "wrongIndentation",
      nodeType: "Identifier",
      ruleId: "editorconfig/indent",
      severity: 2,
    },
    {
      column: 7,
      endColumn: 11,
      endLine: 4,
      line: 4,
      message: "'hoge' is assigned a value but never used.",
      messageId: "unusedVar",
      nodeType: "Identifier",
      ruleId: "no-unused-vars",
      severity: 2,
    },
    {
      column: 1,
      endColumn: 1,
      fix: {
        range: [ 143, 143 ],
        text: "    ",
      },
      line: 5,
      endLine: 5,
      message: "Expected indentation of 4 spaces but found 0.",
      messageId: "wrongIndentation",
      nodeType: "Identifier",
      ruleId: "editorconfig/indent",
      severity: 2,
    },
    {
      column: 1,
      endColumn: 9,
      fix: {
        range: [ 167, 175 ],
        text: "    ",
      },
      line: 6,
      endLine: 6,
      message: "Expected indentation of 4 spaces but found 8.",
      messageId: "wrongIndentation",
      nodeType: "Identifier",
      ruleId: "editorconfig/indent",
      severity: 2,
    },
    {
      column: 15,
      endColumn: 16,
      endLine: 6,
      fix: {
        range: [ 181, 181 ],
        text: ",",
      },
      line: 6,
      message: "Missing trailing comma.",
      messageId: "missing",
      nodeType: "Property",
      ruleId: "comma-dangle",
      severity: 2,
    },
    {
      column: 1,
      endColumn: 7,
      fix: {
        range: [ 203, 209 ],
        text: "  ",
      },
      line: 7,
      endLine: 7,
      message: "Expected indentation of 2 spaces but found 6.",
      messageId: "wrongIndentation",
      nodeType: "Punctuator",
      ruleId: "editorconfig/indent",
      severity: 2,
    },
    {
      column: 44,
      endColumn: 45,
      endLine: 9,
      fix: {
        range: [ 256, 256 ],
        text: ";",
      },
      line: 9,
      message: "Missing semicolon.",
      messageId: "missingSemi",
      nodeType: "ExpressionStatement",
      ruleId: "semi",
      severity: 2,
    },
    {
      column: 1,
      endColumn: 1,
      fix: {
        range: [ 308, 308 ],
        text: "  ",
      },
      line: 13,
      endLine: 13,
      message: "Expected indentation of 2 spaces but found 0.",
      messageId: "wrongIndentation",
      nodeType: "Keyword",
      ruleId: "editorconfig/indent",
      severity: 2,
    },
    {
      column: 1,
      endColumn: 3,
      fix: {
        range: [ 320, 322 ],
        text: "    ",
      },
      line: 14,
      endLine: 14,
      message: "Expected indentation of 4 spaces but found 2.",
      messageId: "wrongIndentation",
      nodeType: "Identifier",
      ruleId: "editorconfig/indent",
      severity: 2,
    },
    {
      column: 1,
      endColumn: 3,
      fix: {
        range: [ 342, 344 ],
        text: "    ",
      },
      line: 15,
      endLine: 15,
      message: "Expected indentation of 4 spaces but found 2.",
      messageId: "wrongIndentation",
      nodeType: "Keyword",
      ruleId: "editorconfig/indent",
      severity: 2,
    },
    {
      column: 1,
      endColumn: 1,
      fix: {
        range: [ 351, 351 ],
        text: "  ",
      },
      line: 16,
      endLine: 16,
      message: "Expected indentation of 2 spaces but found 0.",
      messageId: "wrongIndentation",
      nodeType: "Keyword",
      ruleId: "editorconfig/indent",
      severity: 2,
    },
    {
      column: 1,
      endColumn: 3,
      fix: {
        range: [ 360, 362 ],
        text: "    ",
      },
      line: 17,
      endLine: 17,
      message: "Expected indentation of 4 spaces but found 2.",
      messageId: "wrongIndentation",
      nodeType: "Identifier",
      ruleId: "editorconfig/indent",
      severity: 2,
    },
  ]));

  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(13);
  expect(results[0].warningCount).toBe(1);
});

test("js - invalid - no-undef", () => {
  const results = new CLIEngine({
    baseConfig: mergeConfigs(configs.plain, {
      env: {
        node: true,
      },
    }),
    useEslintrc: false,
  }).executeOnFiles(join(__dirname, "js/incorrect.no-undef.js")).results;

  expect(results[0].messages).toEqual([
    {
      column: 1,
      endColumn: 5,
      endLine: 3,
      line: 3,
      message: "'test' is not defined.",
      messageId: "undef",
      nodeType: "Identifier",
      ruleId: "no-undef",
      severity: 2,
    },
    {
      column: 13,
      endColumn: 18,
      endLine: 4,
      line: 4,
      message: "'test2' is not defined.",
      messageId: "undef",
      nodeType: "Identifier",
      ruleId: "no-undef",
      severity: 2,
    },
  ]);

  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(2);
  expect(results[0].warningCount).toBe(0);
});

test("ts - valid", () => {
  const results = new CLIEngine({
    baseConfig: mergeConfigs(configs.plain, {
      env: {
        node: true,
      },
      parserOptions: {
        project: join(__dirname, "ts/tsconfig.json"),
      },
    }),
    useEslintrc: false,
  }).executeOnFiles(join(__dirname, "ts/correct.ts")).results;

  expect(results[0].messages).toHaveLength(0);
  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(0);
  expect(results[0].warningCount).toBe(0);
});

test("ts - invalid", () => {
  const results = new CLIEngine({
    baseConfig: mergeConfigs(configs.plain, {
      env: {
        node: true,
      },
      parserOptions: {
        project: join(__dirname, "ts/tsconfig.json"),
      },
    }),
    useEslintrc: false,
  }).executeOnFiles(join(__dirname, "./ts/incorrect.ts")).results;

  expect(results[0].messages).toEqual([
    {
      column: 7,
      endColumn: 11,
      endLine: 4,
      line: 4,
      message: "'hoge' is assigned a value but never used.",
      messageId: "unusedVar",
      nodeType: "Identifier",
      ruleId: "@typescript-eslint/no-unused-vars",
      severity: 2,
    },
    {
      message: "Expected indentation of 2 spaces but found 0.",
      messageId: "wrongIndentation",
      nodeType: "Keyword",
      ruleId: "editorconfig/indent",
      severity: 2,
      line: 8,
      endLine: 8,
      column: 1,
      endColumn: 1,
      fix: {
        range: [ 154, 154 ],
        text: "  ",
      },
    },
    {
      message: "Expected indentation of 4 spaces but found 2.",
      messageId: "wrongIndentation",
      nodeType: "Identifier",
      ruleId: "editorconfig/indent",
      severity: 2,
      line: 9,
      endLine: 9,
      column: 1,
      endColumn: 3,
      fix:  {
        range: [ 166, 168 ],
        text: "    ",
      },
    },
    {
      message: "Expected indentation of 4 spaces but found 2.",
      messageId: "wrongIndentation",
      nodeType: "Keyword",
      ruleId: "editorconfig/indent",
      severity: 2,
      line: 10,
      endLine: 10,
      column: 1,
      endColumn: 3,
      fix:  {
        range: [ 188, 190 ],
        text: "    ",
      },
    },
    {
      message: "Expected indentation of 2 spaces but found 0.",
      messageId: "wrongIndentation",
      nodeType: "Keyword",
      ruleId: "editorconfig/indent",
      severity: 2,
      line: 11,
      endLine: 11,
      column: 1,
      endColumn: 1,
      fix:  {
        range: [ 197, 197 ],
        text: "  ",
      },
    },
    {
      message: "Expected indentation of 4 spaces but found 2.",
      messageId: "wrongIndentation",
      nodeType: "Identifier",
      ruleId: "editorconfig/indent",
      severity: 2,
      line: 12,
      endLine: 12,
      column: 1,
      endColumn: 3,
      fix:  {
        range: [ 206, 208 ],
        text: "    ",
      },
    },
  ]);

  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(6);
  expect(results[0].warningCount).toBe(0);
});

test("modules - js - valid", () => {
  const engine = new CLIEngine({
    baseConfig: mergeConfigs(configs.plain, {
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "module", // You need to explicitly set sourceType: "module" in JS code
      },
    }),
    useEslintrc: false,
  });
  const results1 = engine.executeOnFiles(join(__dirname, "js/correct.modules-1.js")).results;
  const results2 = engine.executeOnFiles(join(__dirname, "js/correct.modules-2.js")).results;

  for (const results of [ results1, results2 ]) {
    expect(results[0].messages).toHaveLength(0);
    expect(results).toHaveLength(1);
    expect(results[0].errorCount).toBe(0);
    expect(results[0].warningCount).toBe(0);
  }
});

test("modules - js - invalid", () => {
  const engine = new CLIEngine({
    baseConfig: mergeConfigs(configs.plain, {
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "module", // You need to explicitly set sourceType: "module" in JS code
      },
    }),
    useEslintrc: false,
  });
  const results1 = engine.executeOnFiles(join(__dirname, "js/incorrect.modules-1.js")).results;
  const results2 = engine.executeOnFiles(join(__dirname, "js/incorrect.modules-2.js")).results;

  for (const results of [ results1, results2 ]) {
    expect(results[0].messages).toEqual([{
      line: 1,
      endLine: 1,
      column: 1,
      endColumn: 14,
      fix: {
        range: [ 0, 13 ],
        text: "",
      },
      message: "'use strict' is unnecessary inside of modules.",
      messageId: "module",
      nodeType: "ExpressionStatement",
      ruleId: "strict",
      severity: 2,
    }]);
    expect(results).toHaveLength(1);
    expect(results[0].errorCount).toBe(1);
    expect(results[0].warningCount).toBe(0);
  }
});

test("modules - ts - valid", () => {
  const engine = new CLIEngine({
    baseConfig: mergeConfigs(configs.plain, {
      env: {
        node: true,
      },
      parserOptions: {
        project: join(__dirname, "ts/tsconfig.json"),
      },
    }),
    useEslintrc: false,
  });
  const results1 = engine.executeOnFiles(join(__dirname, "ts/correct.modules-1.ts")).results;
  const results2 = engine.executeOnFiles(join(__dirname, "ts/correct.modules-2.ts")).results;

  for (const results of [ results1, results2 ]) {
    expect(results[0].messages).toHaveLength(0);
    expect(results).toHaveLength(1);
    expect(results[0].errorCount).toBe(0);
    expect(results[0].warningCount).toBe(0);
  }
});

for (const lang of [ "js", "ts" ]) {
  test(`jest - ${lang} - valid`, () => {
    const config = mergeConfigs(configs.plain, configs.jest);
    const results = new CLIEngine({
      baseConfig: mergeConfigs(config, lang === "ts" ? {
        parserOptions: {
          project: join(__dirname, "ts/tsconfig.json"),
        },
      } : {}),
      useEslintrc: false,
    }).executeOnFiles(join(__dirname, `./${lang}/jest-correct.test.${lang}`)).results;

    expect(results[0].messages).toEqual([]);
    expect(results).toHaveLength(1);
    expect(results[0].errorCount).toBe(0);
    expect(results[0].warningCount).toBe(0);
  });

  test(`jest - ${lang} - invalid`, () => {
    const config = mergeConfigs(configs.plain, configs.jest);
    const results = new CLIEngine({
      baseConfig: mergeConfigs(config, lang === "ts" ? {
        parserOptions: {
          project: join(__dirname, "ts/tsconfig.json"),
        },
      } : {}),
      useEslintrc: false,
    }).executeOnFiles(join(__dirname, `./${lang}/jest-incorrect.test.${lang}`)).results;

    expect(results[0].messages).toEqual([
      {
        column: 1,
        endColumn: 3,
        endLine: 13,
        line: 11,
        message: "Skipped test",
        messageId: "skippedTest",
        nodeType: "CallExpression",
        ruleId: "jest/no-disabled-tests",
        severity: 2,
      },
      {
        column: 6,
        endColumn: 10,
        endLine: 15,
        line: 15,
        message: "Unexpected focused test.",
        messageId: "focusedTest",
        nodeType: "Identifier",
        ruleId: "jest/no-focused-tests",
        severity: 2,
        suggestions: [{
          desc: "Remove focus from test.",
          fix:  {
            range: [
              176,
              181,
            ],
            text: "",
          },
          messageId: "suggestRemoveFocus",
        }],
      },
      {
        column: 6,
        endColumn: 23,
        endLine: 23,
        line: 23,
        message: "Test title is used multiple times in the same describe block.",
        messageId: "multipleTestTitle",
        nodeType: "Literal",
        ruleId: "jest/no-identical-title",
        severity: 2,
      },
      {
        column: 30,
        endColumn: 34,
        endLine: 28,
        fix: {
          range: [
            404,
            417,
          ],
          text: ").toHaveLength",
        },
        line: 28,
        message: "Use toHaveLength() instead",
        messageId: "useToHaveLength",
        nodeType: "Identifier",
        ruleId: "jest/prefer-to-have-length",
        severity: 1,
      },
      {
        column: 44,
        endColumn: 1,
        endLine: 34,
        fix: {
          range: [
            559,
            559,
          ],
          text: ";",
        },
        line: 33,
        message: "Missing semicolon.",
        messageId: "missingSemi",
        nodeType: "ExpressionStatement",
        ruleId: `${lang === "ts" ? "@typescript-eslint/" : ""}semi`,
        severity: 2,
      },
    ]);

    expect(results).toHaveLength(1);
    expect(results[0].errorCount).toBe(4);
    expect(results[0].warningCount).toBe(1);
  });
}

test("CommonJS needs 'use strict'", () => {
  const results = new CLIEngine({
    baseConfig: configs.node,
    useEslintrc: false,
  }).executeOnFiles(join(__dirname, "./js/correct.use-strict.cjs")).results;

  expect(results[0].messages).toEqual([]);
  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(0);
  expect(results[0].warningCount).toBe(0);
});

test("JSM forbids 'use strict'", () => {
  const results = new CLIEngine({
    baseConfig: configs.node,
    useEslintrc: false,
  }).executeOnFiles(join(__dirname, "./js/correct.use-strict.mjs")).results;

  expect(results[0].messages).toEqual([]);
  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(0);
  expect(results[0].warningCount).toBe(0);
});

test("Error when no 'use strict' in CommonJS", () => {
  const results = new CLIEngine({
    baseConfig: configs.node,
    useEslintrc: false,
  }).executeOnFiles(join(__dirname, "./js/incorrect.use-strict.cjs")).results;

  expect(results[0].messages).toEqual([
    {
      message: "Use the global form of 'use strict'.",
      messageId: "global",
      nodeType: "Program",
      ruleId: "strict",
      severity: 2,
      line: 1,
      endLine: 1,
      column: 1,
      endColumn: 71,
    },
  ]);
  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(1);
  expect(results[0].warningCount).toBe(0);
});

test("Error when 'use strict' in JSM", () => {
  const results = new CLIEngine({
    baseConfig: configs.node,
    useEslintrc: false,
  }).executeOnFiles(join(__dirname, "./js/incorrect.use-strict.mjs")).results;

  expect(results[0].messages).toEqual([
    {
      message: "'use strict' is unnecessary inside of modules.",
      messageId: "module",
      nodeType: "ExpressionStatement",
      ruleId: "strict",
      severity: 2,
      line: 1,
      endLine: 1,
      column: 1,
      endColumn: 14,
      fix: {
        range: [
          0,
          13,
        ],
        text: "",
      },
    },
  ]);
  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(1);
  expect(results[0].warningCount).toBe(0);
});
