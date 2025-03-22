const extendedGCD = require("../src/extendedGCD");

test("Computes extended GCD", () => {
    expect(extendedGCD(30, 20)).toEqual({ gcd: 10, x: 1, y: -1 });
});
