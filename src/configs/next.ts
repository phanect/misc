import { FlatCompat } from "@eslint/eslintrc";
import { react } from "./react.js";
import { projectRoot } from "../utils.ts";
import type { Linter } from "eslint";

const compat = new FlatCompat({
  baseDirectory: projectRoot,
  resolvePluginsRelativeTo: projectRoot,
});

export const next: Linter.FlatConfig[] = [
  // plain is not required here because it is imported in `react()`
  ...react,
  ...compat.extends("next/core-web-vitals"),
];
