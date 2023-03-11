import { describe, it, expect } from "vitest";
import { chainable } from "../lib";
describe("object/chainable", () => {
  it("获取config", () => {
    const config = chainable({});
    expect(config).toBeDefined();
    expect(config).not.toBeUndefined();
    expect(config).not.toBeNull();
  });
});
