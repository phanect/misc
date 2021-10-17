"use strict";

module.exports = {
  configs: {
    plain: require("../dist/plain.json"),
    node: require("../dist/node.json"),
    react: require("../dist/react.json"),
    "vue+js": require("../dist/vue+js.json"),
    "vue+ts": require("../dist/vue+ts.json"),
    "nuxt+js": require("../dist/nuxt+js.json"),
    "nuxt+ts": require("../dist/nuxt+ts.json"),
    jest: require("../dist/jest.json"),
  },
};
