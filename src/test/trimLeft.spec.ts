import { describe, it, expect } from "vitest";
import { trimLeft } from "../lib";
import { TrimLeft } from "../lib/string/trimLeft";

describe("string/trimleft", () => {
  it("should remove leading spaces, tabs, and newlines", () => {
    expect(trimLeft("   Hello World  ")).toBe("Hello World  ");
    expect(trimLeft("  \n\t   Hello World  ")).toBe("Hello World  ");
    expect(trimLeft("\n\n\t  Hi there")).toBe("Hi there");
  });

  it("should return an empty string for empty input", () => {
    expect(trimLeft("")).toBe("");
  });

  it("should not remove leading spaces within the string", () => {
    expect(trimLeft(" Hello World ")).toBe("Hello World ");
  });

  it("should preserve type safety", () => {
    type Test1 = TrimLeft<"   Hello World  ">;
    type Test2 = TrimLeft<"  \n\t   Hello World  ">;
    type Test3 = TrimLeft<"Hello World  ">;
    type Test4 = TrimLeft<"">;

    const value1: Test1 = "Hello World  ";
    const value2: Test2 = "Hello World  ";
    const value3: Test3 = "Hello World  ";
    const value4: Test4 = "";

    expect(value1).toBe("Hello World  ");
    expect(value2).toBe("Hello World  ");
    expect(value3).toBe("Hello World  ");
    expect(value4).toBe("");
  });
});
