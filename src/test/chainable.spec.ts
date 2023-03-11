import { describe, it, expect } from "vitest";
import { chainable } from "../lib";
describe("object/chainable", () => {
  it("调用chainable函数，第一个参数类型为{}", () => {
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
  it("调用chainable函数，第一个参数类型为{name: 'zzy', age: 18}", () => {
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
    expect(target).toEqual({name: "zzy", age: 18});
  });
});
