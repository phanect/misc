import { expect, test, beforeEach, afterEach } from "vitest";

beforeEach(() => {
  console.log("before");
});

afterEach(() => {
  console.log("after");
});

test("prefer toHaveLength", () => {
  expect([ 1, 2, 3 ].length).toBe(3);
});
