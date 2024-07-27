import { nodejsConfigs } from "./configs/nodejs.ts";
import type { Linter } from "eslint";

export const configs: Linter.FlatConfig[] = nodejsConfigs;
