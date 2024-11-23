# `@phanect/configs`

Collection of personal configuration files for [@phanect](https://github.com/phanect)

## Install packages

```sh
npm install -D @phanect/configs typescript @types/node
```

## tsconfig

### Usage

tsconfig.json

```json
{
  "extends": [
    "@phanect/configs/ts",
    // add for npm packages (both for frontend and Node.js)
    "@phanect/configs/ts/addons/npm"
  ],
  "compilerOptions": {
    // add `dom` for frontend projects
    "lib": [
      "esnext",
      "dom"
    ],
    "types": [
      // add for Cloudflare Workers projects
      "@cloudflare/workers-types",
      // add for projects using Vite
      "vite/client"
    ],
    // add for Hono projects
    "jsxImportSource": "hono/jsx"
  }
}
```

### List of tsconfigs

- `@phanect/configs/ts`: For projects other than Node.js (Frontend & Cloudflare Workers)
- `@phanect/configs/ts/nodejs`: For Node.js projects
- `@phanect/configs/ts/addons/npm`: Supplemental tsconfig for npm package (Generates .d.ts files)

## License

[CC0 1.0](./LICENSE.txt) (≒ Public Domain)
