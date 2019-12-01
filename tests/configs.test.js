"use strict";

const { CLIEngine } = require("eslint");
const { join } = require("path");

const { configs } = require("../config");

test("js - valid", () => {
  const results = new CLIEngine({
    baseConfig: configs.js,
    userEslintrc: false,
  }).executeOnFiles(join(__dirname, "js/correct.js")).results;

  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(0);
  expect(results[0].warningCount).toBe(0);
  expect(results[0].messages).toHaveLength(0);
});

test("js - invalid", () => {
  const results = new CLIEngine({
    baseConfig: configs.js,
    userEslintrc: false,
  }).executeOnFiles(join(__dirname, "js/incorrect.js")).results;

  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(12);
  expect(results[0].warningCount).toBe(1);

  expect(results[0].messages).toEqual([
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
      nodeType: "VariableDeclaration",
      ruleId: "one-var",
      severity: 1,
    },
    {
      column: 2,
      fix: {
        range: [ 104, 110 ],
        text: "  ",
      },
      line: 4,
      message: "EditorConfig: Expected indentation of 2 spaces but found 6.",
      nodeType: null,
      ruleId: "editorconfig/editorconfig",
      severity: 2,
    },
    {
      column: 7,
      endColumn: 11,
      endLine: 4,
      line: 4,
      message: "'hoge' is assigned a value but never used.",
      nodeType: "Identifier",
      ruleId: "no-unused-vars",
      severity: 2,
    },
    {
      column: 2,
      fix: {
        range: [ 143, 143 ],
        text: "    ",
      },
      line: 5,
      message: "EditorConfig: Expected indentation of 4 spaces but found 0.",
      nodeType: null,
      ruleId: "editorconfig/editorconfig",
      severity: 2,
    },
    {
      column: 2,
      fix: {
        range: [ 167, 175 ],
        text: "    ",
      },
      line: 6,
      message: "EditorConfig: Expected indentation of 4 spaces but found 8.",
      nodeType: null,
      ruleId: "editorconfig/editorconfig",
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
      column: 2,
      fix: {
        range: [ 203, 209 ],
        text: "  ",
      },
      line: 7,
      message: "EditorConfig: Expected indentation of 2 spaces but found 6.",
      nodeType: null,
      ruleId: "editorconfig/editorconfig",
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
      nodeType: "ExpressionStatement",
      ruleId: "semi",
      severity: 2,
    },
    {
      column: 2,
      fix: {
        range: [ 308, 308 ],
        text: "  ",
      },
      line: 13,
      message: "EditorConfig: Expected indentation of 2 spaces but found 0.",
      nodeType: null,
      ruleId: "editorconfig/editorconfig",
      severity: 2,
    },
    {
      column: 2,
      fix: {
        range: [ 320, 322 ],
        text: "    ",
      },
      line: 14,
      message: "EditorConfig: Expected indentation of 4 spaces but found 2.",
      nodeType: null,
      ruleId: "editorconfig/editorconfig",
      severity: 2,
    },
    {
      column: 2,
      fix: {
        range: [ 342, 344 ],
        text: "    ",
      },
      line: 15,
      message: "EditorConfig: Expected indentation of 4 spaces but found 2.",
      nodeType: null,
      ruleId: "editorconfig/editorconfig",
      severity: 2,
    },
    {
      column: 2,
      fix: {
        range: [ 351, 351 ],
        text: "  ",
      },
      line: 16,
      message: "EditorConfig: Expected indentation of 2 spaces but found 0.",
      nodeType: null,
      ruleId: "editorconfig/editorconfig",
      severity: 2,
    },
    {
      column: 2,
      fix: {
        range: [ 360, 362 ],
        text: "    ",
      },
      line: 17,
      message: "EditorConfig: Expected indentation of 4 spaces but found 2.",
      nodeType: null,
      ruleId: "editorconfig/editorconfig",
      severity: 2,
    },
  ]);
});

test("js - invalid - no-undef", () => {
  const results = new CLIEngine({
    baseConfig: configs.js,
    userEslintrc: false,
  }).executeOnFiles(join(__dirname, "js/incorrect.no-undef.js")).results;

  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(3);
  expect(results[0].warningCount).toBe(1);

  expect(results[0].messages).toEqual([
    {
      column: 1,
      endColumn: 7,
      endLine: 3,
      line: 3,
      message: "Test is missing function argument",
      messageId: "missingFunction",
      nodeType: "CallExpression",
      ruleId: "jest/no-disabled-tests",
      severity: 1,
    },
    {
      column: 7,
      endColumn: 1,
      endLine: 4,
      fix: {
        range: [ 21, 21 ],
        text: ";",
      },
      line: 3,
      message: "Missing semicolon.",
      nodeType: "ExpressionStatement",
      ruleId: "semi",
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
    {
      column: 19,
      endColumn: 1,
      endLine: 5,
      fix: {
        range: [ 40, 40 ],
        text: ";",
      },
      line: 4,
      message: "Missing semicolon.",
      nodeType: "ExpressionStatement",
      ruleId: "semi",
      severity: 2,
    },
  ]);
});

test("ts - valid", () => {
  const results = new CLIEngine({
    baseConfig: configs.ts,
    userEslintrc: false,
  }).executeOnFiles(join(__dirname, "ts/correct.ts")).results;

  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(0);
  expect(results[0].warningCount).toBe(0);
  expect(results[0].messages).toHaveLength(0);
});

test("ts - invalid", () => {
  const results = new CLIEngine({
    baseConfig: configs.ts,
    userEslintrc: false,
  }).executeOnFiles(join(__dirname, "./ts/incorrect.ts")).results;

  expect(results).toHaveLength(1);
  expect(results[0].errorCount).toBe(2);
  expect(results[0].warningCount).toBe(0);

  expect(results[0].messages).toEqual([
    {
      column: 7,
      endColumn: 11,
      endLine: 4,
      line: 4,
      message: "'hoge' is assigned a value but never used.",
      nodeType: "Identifier",
      ruleId: "no-unused-vars",
      severity: 2,
    },
    {
      column: 7,
      endColumn: 11,
      endLine: 4,
      line: 4,
      message: "'hoge' is assigned a value but never used.",
      nodeType: "Identifier",
      ruleId: "@typescript-eslint/no-unused-vars",
      severity: 2,
    },
  ]);
});
