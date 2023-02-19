import { describe, it, expect } from "vitest";
import { head } from "../lib/array";
describe("test zip", () => {
  it("head params tuple array", () => {
    const res = head([1, 2, 3] as const);
    expect(res).toBe(1);
  });
  it("head params [1, 2, 3]", () => {
    const res = head([1, 2, 3]);
    expect(res).toBeDefined();
    expect(res).toBeTypeOf("number");
  });
  it("head params []", () => {
    const res = head([]);
    expect(res).toBeUndefined();
  });
  it("head params [string, string, number]", () => {
    const res = head(["a", "b", 1]);
    expect(res).toBeDefined();
    expect(res).toBeTypeOf("string");
  });
});
