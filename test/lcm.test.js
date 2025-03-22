const lcm = require("../src/lcm");

test("Computes LCM of two numbers", () => {
    expect(lcm(4, 5)).toBe(20);
});

test("LCM of a number and 1 is the number itself", () => {
    expect(lcm(7, 1)).toBe(7);
    expect(lcm(1, 9)).toBe(9);
});

test("LCM of two prime numbers", () => {
    expect(lcm(3, 7)).toBe(21);
    expect(lcm(11, 13)).toBe(143);
});

test("LCM of a number and itself is the number", () => {
    expect(lcm(6, 6)).toBe(6);
    expect(lcm(10, 10)).toBe(10);
});

test("LCM of zero and any number is zero", () => {
    expect(lcm(0, 5)).toBe(0);
    expect(lcm(7, 0)).toBe(0);
});

test("LCM of negative numbers", () => {
    expect(lcm(-4, 5)).toBe(20);
    expect(lcm(4, -5)).toBe(20);
    expect(lcm(-4, -5)).toBe(20);
});
