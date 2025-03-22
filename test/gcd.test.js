const gcd = require("../src/gcd");

test("GCD of two positive numbers", () => {
    expect(gcd(8, 12)).toBe(4);
});

test("GCD of two negative numbers", () => {
    expect(gcd(-8, -12)).toBe(4);
});

test("GCD of positive and negative numbers", () => {
    expect(gcd(8, -12)).toBe(4);
    expect(gcd(-8, 12)).toBe(4);
});

test("GCD when one number is zero", () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(5, 0)).toBe(5);
});
