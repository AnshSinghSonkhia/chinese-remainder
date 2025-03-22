const lcm = require("../src/lcm");

test("Computes LCM of two numbers", () => {
    expect(lcm(4, 5)).toBe(20);
});
