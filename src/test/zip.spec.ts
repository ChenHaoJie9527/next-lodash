import { describe, it, expect } from "vitest";
import { zip } from "../lib/array";
describe("test zip", () => {
  it("zip result is [[1, 4], [2, 5], [3, 6]]", () => {
    const result = zip([1, 2, 3] as const, [4, 5, 6] as const);
    const lent = result.length;
    expect(lent).toBe(3);
  });
});
