import { pop } from "../lib";
import { describe, it, expect } from "vitest";

describe("array/pop", () => {
  // it("使用非array 类型，调用pop方法，返回一个空数组",() => {
  //     const res = pop(123);
  //     expect(res).toEqual([]);
  // })

  it("传入空数组，将返回空数组", () => {
    const res = pop([]);
    expect(res).toEqual([]);
  });

  it("传入数组[1,2,3]，返回数组[1,2]", () => {
    const res = pop([1, 2, 3]);
    expect(res).toEqual([1, 2]);
  });

  it("传入元组 [1,null, 3, undefined], 返回 [1, null, 3]", () => {
    const res = pop([1, null, 3, undefined] as const);
    expect(res).toEqual([1, null, 3]);
  });
});
