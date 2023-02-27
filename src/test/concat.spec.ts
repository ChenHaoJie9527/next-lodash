import { describe, it, expect } from "vitest";
import { concat } from "../lib/array";

describe("array/concat", () => {
  it("should concat", () => {
    const res = concat([1, 2, 3], [4, 5, 6]);
    expect(res).toBeDefined();
    expect(res.length).not.toBe(0);
    expect(res.length).toBe(6);
  });
  it("concat params not array", () => {
    const res = concat([1], 2, 3, 4, 5, false, "a", null, undefined);
    expect(res).toBeDefined();
    expect(res.length).not.toBe(0);
    expect(res.length).toBe(9);

  });
});
