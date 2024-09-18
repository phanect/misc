import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    exclude: [
      "./tests/fixtures/**/*",
      "**/node_modules/**",
      "**/dist/**",
      "**/.{idea,vscode,git}/**",
      "**/*.config.*",
    ],
  },
});
