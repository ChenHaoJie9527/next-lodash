import { describe, expect, it } from "vitest";
import { get } from "../lib";

type ActiveityLog = {
  lastEvent: Date;
  events: {
    id: string;
    timestamp: Date;
    type: "Read" | "Write";
    mapList: {
      id: number;
      list: any[];
    };
  };
};
describe("object/get", () => {
  const activeityLog: ActiveityLog = {
    lastEvent: new Date(),
    events: {
      id: "__123",
      timestamp: new Date(),
      type: "Read",
      mapList: {
        id: 1,
        list: [1, 2, 3],
      },
    },
  };
  it("own key is lastEvent", () => {
    const res = get(activeityLog, "lastEvent");
    expect(res.getDate()).toBeTypeOf("number");
    expect(res).toBeDefined();
  });
  it("own key is events", () => {
    const res = get(activeityLog, "events");
    expect(res).not.toBeNull();
    expect(res.id).toBeTypeOf("string");
    expect(res.type).toBeTypeOf("string");
    expect(res.mapList).toBeTypeOf("object");
    expect(res.timestamp).toBeTypeOf("object");
  });
  it("two key is id", () => {
    const res = get(activeityLog, "events", "id");
    expect(res).toBeTypeOf("string");
    expect(res).toBe("__123");
  });
  it("two key is type", () => {
    const res = get(activeityLog, "events", "type");
    expect(res).toBe("Read");
  });
  it("there key is mapList id", () => {
    const res = get(activeityLog, "events", "mapList", "id");
    expect(res).toBeTypeOf("number");
    expect(res).toBe(1);
  });
  it("there key is mapList list", () => {
    const res = get(activeityLog, "events", "mapList", "list");
    expect(res).toBeTypeOf("object");
    expect(res).toEqual([1, 2, 3]);
  });
});
