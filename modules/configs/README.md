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
    "@phanect/configs/tsconfig/nodejs",
    "@phanect/configs/tsconfig/addons/npm"
  ]
}
```

### List of tsconfigs

- `@phanect/configs/tsconfig/frontend`: tsconfig.json for frontend projects.
- `@phanect/configs/tsconfig/nodejs`: tsconfig.json for Node.js projects. (Backend app & npm package)
- `@phanect/configs/tsconfig/cloudflare`: tsconfig.json for the apps runs on Cloudflare Workers
- `@phanect/configs/tsconfig/addons/jsx`: Supplemental tsconfig for JSX projects
- `@phanect/configs/tsconfig/addons/npm`: Supplemental tsconfig for npm package (Generates .d.ts files)
- `@phanect/configs/tsconfig/addons/vite`: Supplemental tsconfig for projects using Vite

## License

[CC0 1.0](./LICENSE.txt) (≒ Public Domain)
