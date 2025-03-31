import markdown from "@eslint/markdown";
import type { ESLint, Linter } from "eslint";

export const markdownConfigs: Linter.Config[] = [
  ...markdown.configs.recommended,
  {
    plugins: {
      markdown: markdown as unknown as ESLint.Plugin,
    },
    rules: {
      "markdown/no-duplicate-headings": "error",

      // Does not work with eslint-plugin-jsonc as of 2025/04/01
      "markdown/fenced-code-language": "off",
    },
  } satisfies Linter.Config,
].map((config) => ({
  ...config,
  language: "markdown/gfm",
}));
