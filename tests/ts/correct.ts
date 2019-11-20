"use strict";

const foo = "bar";
const hoge = "fuga";

console.log(foo, hoge);

// SwitchCase
switch(foo) {
  case "bar":
    console.log("bar");
    break;
  default:
    console.log("default");
}

// URL is not reported by node/no-unsupported-features/node-builtins when you use phanect/js rule.
new URL("https://example.com");
