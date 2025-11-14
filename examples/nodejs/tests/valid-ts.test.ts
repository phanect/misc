import { afterEach, beforeEach, expect, test } from "vitest";

beforeEach(() => {
  console.log("before");
});

afterEach(() => {
  console.log("after");
});

test("tetete", () => {
  expect(1).toBe(1);
}, 50000);
