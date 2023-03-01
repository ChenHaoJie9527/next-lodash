import { describe, it, expect } from "vitest";
import { chunk } from "../lib";

describe("array chunk", () => {
  it("no size", () => {
    const arr = chunk([1, 2, 3, 4] as const);
    expect(arr).toBeDefined();
    expect(arr.length).toBe(4);
    expect(arr).toEqual([[1], [2], [3], [4]]);
  });
  it("size is 2", () => {
    const arr = chunk([1, 2, 3, 4] as const, 2);
    expect(arr).toBeDefined();
    expect(arr.length).toBe(2);
    expect(arr).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("arr not is tuple", () => {
    const arr = [1, 2, 3, 4];
    const res = chunk(arr, 2);
     expect(res).toBeDefined();
     expect(res.length).toBe(2);
     expect(res).toEqual([
       [1, 2],
       [3, 4],
     ]);
  });
});
