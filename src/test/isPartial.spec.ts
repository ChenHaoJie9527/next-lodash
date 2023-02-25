import { describe, it, expect } from "vitest";
import type { MyPartial } from "../utils/isPartial";

describe("MyPartial", () => {
  type Foo = {
    a: string;
    b: number;
    c: boolean;
  };
  it("赋值为空对象{}", () => {
    const result: MyPartial<Foo> = {};
    expect(result).toBeDefined();
  });
  it("只有属性a", () => {
    const result: MyPartial<Foo> = {
      a: "123",
    };
    expect(result.a).toBeDefined();
    expect(result.a).toBeTypeOf("string");
    expect(result.a).toBe("123");
  });
  it("只有属性b", () => {
    const result: MyPartial<Foo> = {
      b: 110,
    };
    expect(result.b).toBeDefined();
    expect(result.b).toBeTypeOf("number");
    expect(result.b).toBe(110);
  });
  it("有b、c属性", () => {
    const result: MyPartial<Foo> = {
      a: "chj",
      b: 110,
    };
    expect(result.a).toBeDefined();
    expect(result.b).toBeDefined();
    expect(result.a).toBeTypeOf("string");
    expect(result.b).toBeTypeOf("number");
    expect(result.a).toBe("chj");
    expect(result.b).toBe(110);
  });
  it("实现全部的属性", () => {
    const result: MyPartial<Foo> = {
      a: "chj",
      b: 110,
      c: false,
    };
    expect(result.a).toBeDefined();
    expect(result.b).toBeDefined();
    expect(result.c).toBeDefined();

    expect(result.a).toBeTypeOf("string");
    expect(result.b).toBeTypeOf("number");
    expect(result.c).toBeTypeOf("boolean");

    expect(result.a).toBe("chj");
    expect(result.b).toBe(110);
    expect(result.c).toBe(false);
  });
});
