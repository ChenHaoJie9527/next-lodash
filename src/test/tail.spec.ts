import { describe, it, expect } from "vitest";
import { tail } from "../lib/array";

describe("array tail", () => {
  it("tail params is tuple", () => {
    const myTuple = [1, 2, 3, 4] as const;
    const res = tail(myTuple);
    expect(res.length).toBeDefined()
    expect(res).toHaveLength(3)
    expect(res.length).not.toBe(5);
    expect(res[0]).toBeTypeOf("number")
    expect(res[1]).toBeTypeOf("number");
    expect(res[2]).toBeTypeOf("number");
  });
});
