import {describe, it, expect} from "vitest";
import { last } from "../lib/array";

describe("the array last item", () => {
    it("function params is array", () => {
        const res = last([1, 2, 3]);
        expect(res).toBeDefined()
        expect(res).toBe(3)
    })
    it("function params is []", () => {
        const res = last([]);
        expect(res).toBeUndefined();
    })
})