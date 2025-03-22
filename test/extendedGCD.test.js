const extendedGCD = require("../src/extendedGCD");

test("Computes extended GCD for 30 and 20", () => {
    expect(extendedGCD(30, 20)).toEqual({ gcd: 10, x: 1, y: -1 });
});

test("Computes extended GCD for 35 and 15", () => {
    expect(extendedGCD(35, 15)).toEqual({ gcd: 5, x: 1, y: -2 });
});

test("Computes extended GCD for 101 and 10", () => {
    expect(extendedGCD(101, 10)).toEqual({ gcd: 1, x: 1, y: -10 });
});

test("Computes extended GCD for 0 and 5", () => {
    expect(extendedGCD(0, 5)).toEqual({ gcd: 5, x: 0, y: 1 });
});

test("Computes extended GCD for 5 and 0", () => {
    expect(extendedGCD(5, 0)).toEqual({ gcd: 5, x: 1, y: 0 });
});

test("Computes extended GCD for 17 and 12", () => {
    expect(extendedGCD(17, 12)).toEqual({ gcd: 1, x: 5, y: -7 });
});
