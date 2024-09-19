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

- `@phanect/configs/tsconfig/frontend`: For frontend projects
- `@phanect/configs/tsconfig/nodejs`: For Node.js projects (Backend app & npm package)
- `@phanect/configs/tsconfig/cloudflare`: For the apps runs on Cloudflare Workers. Use this config not only when your app only includes code for Cloudflare Workers, but also when your package includes the both code for Cloudflare Workers and frontend. (e.g. like Next.js or Nuxt-based app which includes both frontend and backend code)
- `@phanect/configs/tsconfig/addons/jsx`: Supplemental tsconfig for JSX projects
- `@phanect/configs/tsconfig/addons/npm`: Supplemental tsconfig for npm package (Generates .d.ts files)
- `@phanect/configs/tsconfig/addons/vite`: Supplemental tsconfig for projects using Vite

## License

[CC0 1.0](./LICENSE.txt) (≒ Public Domain)
