// No "use strict"

const foo = "bar";
const hoge = "fuga";

console.log(foo, hoge);

// SwitchCase
switch (foo) {
  case "bar":
    console.log("bar");
    break;
  default:
    console.log("default");
}

// URL is not reported by n/no-unsupported-features/node-builtins when you use phanect/ts rule.
new URL("https://example.com");

// comma-dangle for functions
console.log(
  "Very very very very very very very long argument which requires line break"
);

/* eslint-disable promise/prefer-await-to-callbacks */
// aliasing `this` is allowed (@typescript-eslint/no-this-alias is disabled)
function funcRequiresCallback(callback: () => void): void {
  callback();
}
const self = this;
funcRequiresCallback(() => {
  console.log(self);
});
/* eslint-enable promise/prefer-await-to-callbacks */

// require-await is disabled
// and allow floating async function with `void` prefix
async function asyncFunctionWithoutAwait(): Promise<void> {
  console.log();
}
void asyncFunctionWithoutAwait();

//
// TypeScript-specific
//

// @template tag is allowed in JSDoc
/**
 * Sample function.
 * @param arr - The argument.
 * @returns The return value.
 * @template T
 */
function tetete<T>(arr: T[]): T[] {
  return arr;
}
tetete([ "a", "b", "c" ]);
