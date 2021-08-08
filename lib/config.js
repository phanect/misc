"use strict";

module.exports = {
  configs: {
    plain: require("../dist/plain.json"),
    node: require("../dist/node.json"),
    react: require("../dist/react.json"),
    "vue+js": require("../dist/vue+js.json"),
    "vue+ts": require("../dist/vue+ts.json"),
    nuxt: require("../dist/nuxt.json"),
    jest: require("../dist/jest.json"),
  },
};
