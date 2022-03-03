//src/add.test.js
import add from "@src/tests/add";

describe("add tests", () => {
    it("should return 3", () => {
        expect(add(1, 2)).toBe(3)
    });
});