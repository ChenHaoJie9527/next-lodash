import { describe, it, expect } from "vitest";
import { arrayToTuple } from "../utils/isTuple";
import { head } from "../lib/array";

describe("this is array to tuple test", () => {
  it("array to tuple", () => {
    // 对象字面量：[1, 'a', 'b', 'c'] to tuple
    const tuple = arrayToTuple([1, "a", "b", "c"]);
    expect(tuple.length).toBe(4);
    const item1 = head(tuple);
    expect(item1).toBeTypeOf("number");
    expect(item1).toBe(1);
    expect(tuple[1]).toBeTypeOf('string');
    expect(tuple[2]).toBeTypeOf("string");
    expect(tuple[3]).toBeTypeOf("string");

  });
});
