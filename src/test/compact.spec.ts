import { describe, it, expect } from "vitest";
import { compact } from "../lib";

describe("array compact", () => {
  it("移除数组中的假值", () => {
    const arr = ["1", 1, 2, 3, 4, undefined, null, "", 0, NaN] as const;
    const res = compact(arr);
    expect(res.length).not.toBe(0);
    expect(res).toEqual(["1", 1, 2, 3, 4]);
  });

  it("空数组", () => {
    const arr = [] as const;
    const res = compact(arr);
    expect(res.length).toBe(0);
    expect(res).toEqual([]);
  });
});
