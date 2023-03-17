import { describe, it, expect } from "vitest";
import { lookup } from "../lib";

describe("object/lookup", () => {
  it("检索cat", () => {
    const cat = lookup("cat");
    expect(cat).toEqual({ type: "cat", breed: "Abyssinian" });
  });

  it("检索dog", () => {
    const dog = lookup("dog");
    expect(dog).toEqual({ type: "dog", color: "brown" });
  });

  it("检索pig", () => {
    const pig = lookup("pig");
    expect(pig).toEqual({ type: "pig", color: "pink" });
  });
});
