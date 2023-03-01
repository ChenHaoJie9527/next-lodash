import { describe, it, expect } from "vitest";
import { chunk } from "../lib";

describe("array chunk", () => {
  it("should return an empty array for empty input", () => {
    const res = chunk([]);
    expect(res).toEqual([]);
  });

  it("should return an array with one chunk for input array with one element", () => {
    const res = chunk([1] as const);
    expect(res).toEqual([[1]]);
  });

  it("should return an array of chunks with length 2 for input array with odd length", () => {
    const res = chunk([1, 2, 3, 4, 5] as const, 2);
    expect(res).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should return an array of chunks with length 3 for input array with even length", () => {
    const res = chunk([1, 2, 3, 4] as const, 3);
    expect(res).toEqual([[1, 2, 3], [4]]);
  });

  it("should return an array of chunks with length 1 for input array with specified chunk size 0", () => {
    const res = chunk([1, 2, 3, 4] as const, 0);
    expect(res).toEqual([[1], [2], [3], [4]]);
  });

  it("should handle empty cache parameter", () => {
    const res = chunk([1, 2, 3, 4] as const, 2, []);
    expect(res).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
