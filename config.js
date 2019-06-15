"use strict";

const js = require("./configs/js");
const ts = require("./configs/ts");
const vue = (lang) => {
  return {
    extends: lang.extends.concat([ "plugin:vue/recommended" ]),
    plugins: lang.plugins.concat("vue"),
    rules: Object.assign({
      //
      // Warnings
      //
      "vue/html-self-closing": [ "warn", { html: { normal: "never" }}],
      "vue/max-attributes-per-line": [ "warn", {
        singleline: 7,
        multiline: { max: 2 },
      }],
    }, lang.rules),
  };
};

module.exports = {
  configs: {
    js, ts,
    "vue+js": vue(js),
    "vue+ts": vue(ts),
  },
};
