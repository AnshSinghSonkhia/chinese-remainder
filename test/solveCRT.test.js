const solveCRT = require("../src/solveCRT");

test("Solves CRT for given remainders and moduli", () => {
    expect(solveCRT([2, 3, 2], [3, 5, 7])).toBe(23);
});