"use strict";

module.exports = {
  configs: {
    js: require("./dist/js.json"),
    ts: require("./dist/ts.json"),
    "node+js": require("./dist/node.js.json"),
    "node+ts": require("./dist/node.ts.json"),
    "react+js": require("./dist/react.js.json"),
    "react+ts": require("./dist/react.ts.json"),
    "vue+js": require("./dist/vue.js.json"),
    "vue+ts": require("./dist/vue.ts.json"),
    jest: require("./dist/jest.json"),
  },
};
