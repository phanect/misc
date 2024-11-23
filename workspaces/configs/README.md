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
    "@phanect/configs/ts/nodejs",
    "@phanect/configs/ts/addons/npm"
  ]
}
```

### List of tsconfigs

- `@phanect/configs/ts`: For projects other than Node.js (Frontend & Cloudflare Workers)
- `@phanect/configs/ts/frontend`: For frontend projects
- `@phanect/configs/ts/nodejs`: For Node.js projects
- `@phanect/configs/ts/cloudflare`: For the apps runs on Cloudflare Workers. Use this config not only when your app only includes code for Cloudflare Workers, but also when your package includes the both code for Cloudflare Workers and frontend. (e.g. like Next.js or Nuxt-based app which includes both frontend and backend code)
- `@phanect/configs/ts/addons/jsx`: Supplemental tsconfig for JSX projects
- `@phanect/configs/ts/addons/npm`: Supplemental tsconfig for npm package (Generates .d.ts files)
- `@phanect/configs/ts/addons/vite`: Supplemental tsconfig for projects using Vite

## License

[CC0 1.0](./LICENSE.txt) (≒ Public Domain)
