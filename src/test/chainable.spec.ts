import { describe, it, expect } from "vitest";
import { chainable } from "../lib";
describe("object/chainable", () => {
  it("调用chainable函数，第一个参数为{}", () => {
    const config = chainable({});
    expect(config).toBeDefined();
    expect(config).not.toBeUndefined();
    expect(config).not.toBeNull();
    expect(config).toHaveProperty("option");
    expect(config).toHaveProperty("get");
    const target = config.get();
    expect(target).toBeDefined();
    expect(target).not.toBeUndefined();
    expect(target).not.toBeNull();
    expect(target).toEqual({});
  });
  it("调用chainable函数，第一个参数为{name: 'zzy', age: 18}", () => {
    const config = chainable({ name: "zzy", age: 18 });
    expect(config).toBeDefined();
    expect(config).not.toBeUndefined();
    expect(config).not.toBeNull();
    expect(config).toHaveProperty("option");
    expect(config).toHaveProperty("get");
    const target = config.get();
    expect(target).toBeDefined();
    expect(target).not.toBeUndefined();
    expect(target).not.toBeNull();
    expect(target).toEqual({ name: "zzy", age: 18 });
  });
  it("调用chainable函数，第一个参数为{}， 第二个参数为 name，第三个参数为 zzy", () => {
    const config = chainable({}, "name", "zzy");
    const target = config.get();
    expect(target).toBeDefined();
    expect(target).not.toBeUndefined();
    expect(target).not.toBeNull();
    expect(target).toEqual({ name: "zzy" });
  });

  it("使用option，添加key value至目标对象中", () => {
    const config = chainable({ name: "foo" });
    const target = config.option("age", 20).get();
    expect(target).toBeDefined();
    expect(target).not.toBeUndefined();
    expect(target).not.toBeNull();
    expect(target).toEqual({ age: 20, name: "foo" });
  });

  it("多次调用option，返回对象", () => {
    const config = chainable({});
    const target = config
      .option("name", "foo")
      .option("key", 1)
      .option("age", 29)
      .get();
    expect(target).toBeDefined();
    expect(target).not.toBeUndefined();
    expect(target).not.toBeNull();
    expect(target).toEqual({ age: 20, name: "foo", key: 1 });
  });
});
