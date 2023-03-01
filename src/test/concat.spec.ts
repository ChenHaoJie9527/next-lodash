import { describe, it, expect } from "vitest";
import { concat } from "../lib/array";

describe("array/concat", () => {
  it("should concat two array correctly", () => {
    const arr1 = [1, 2, 3] as const;
    const arr2 = [4, 5, 6] as const;
    const res = concat(arr1, arr2);
    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should concat a value to an array correctly", () => {
    const arr1 = [1, 2, 3] as const;
    const val = 4 as const;

    const res = concat(arr1, val);
    expect(res).toEqual([1, 2, 3, 4]);
  });
});
