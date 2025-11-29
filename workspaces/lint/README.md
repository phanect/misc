# `@phanect/lint[-vue|-svelte|-astro]`

ESLint config for my own projects.

## Install

```shell
pnpm install -D eslint @phanect/lint @phanect/lint-react @phanect/lint-vue @phanect/lint-svelte @phanect/lint-astro
```

`@phanect/lint-*` packages are the linter configs for the specific frameworks. Install them if you use them.

## Usage

Create an eslint.config.ts like following on the project root.

```typescript
import { core } from "@phanect/lint";
import { vue, nuxt } from "@phanect/lint-vue";
import { defineConfig, globalIgnores } from "eslint/config";

const configs = defineConfig([
  globalIgnores([
    "path/to/ignore/**",
  ]),

  // If the project includes TypeScript files...
  {
    // Do not add `files: [ "*" ],` here.

    extends: [
      core,
      nuxt,
    ],

    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },

    // If the repository is monorepo and one of the workspaces is Next.js project...
    settings: {
      next: {
        rootDir: "workspaces/my-project/",
      },
    },
  },
]);

export default configs;
```

Supported configs:

- `@phanect/lint`
  - `core`
  - `nodejs`
  - `unbundled`
    - Use this rules in addition to the above rules if the project depends on package.json's `dependencies` on production i.e. npm packages and backend Node.js app without bundling.
- `@phanect/lint-react`
  - `react`
  - `nextjs`
- `@phanect/lint-vue`
  - `vue`
  - `nuxt`
- `@phanect/lint-svelte`
  - `svelte`
- `@phanect/lint-astro`
  - `astro`

## Test with realworld projects

### 1. Generate npm package

```shell
$ cd /path/to/misc
$ pnpm pack
```

### 2. Install new package on a realworld project

```shell
$ cd /path/to/target/project
$ pnpm add -D ../misc/eslint-config-phanective-2024.1.1.tgz
```

### 3. Test

```shell
# $ cd /path/to/target/project
$ pnpm lint
```
