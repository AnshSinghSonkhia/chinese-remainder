const solveCRT = require("../src/solveCRT");

test("Solves CRT for given remainders and moduli", () => {
    expect(solveCRT([2, 3, 2], [3, 5, 7])).toBe(23);
});

test("Solves CRT for another set of remainders and moduli", () => {
    expect(solveCRT([1, 2, 3], [2, 3, 5])).toBe(23);
});

test("Solves CRT for remainders and moduli with larger numbers", () => {
    expect(solveCRT([1, 2, 3], [5, 7, 11])).toBe(366);
});

test("Solves CRT for remainders and moduli with prime numbers", () => {
    expect(solveCRT([1, 1, 1], [2, 3, 5])).toBe(1);
});

// test("Solves CRT for remainders and moduli with non-coprime moduli", () => {
//     expect(solveCRT([1, 2], [4, 6])).toBe(10);
// });