"use strict";

const { expect, test, beforeEach, afterEach } = require("vitest");

beforeEach(() => {
  console.log("before");
});

afterEach(() => {
  console.log("after");
});

test("example", () => {
  expect(1).toBe(1);
}, 50000);
