"use strict";

beforeEach(() => {
  console.log("before");
});

afterEach(() => {
  console.log("after");
});

test("test", () => {
  expect(1).toBe(1);
}, 50000);
