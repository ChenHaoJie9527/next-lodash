import { describe, it, expect } from "vitest";
import { compact } from "../lib";

describe("array compact", () => {
  it("移除数组中的假值", () => {
    const arr = ["1", 1, 2, 3, 4, undefined, null, "", 0, typeof NaN] as const;
    const res = compact(arr);
    
  });
});
