const isCoprime = require("../src/isCoprime");

test("Checks if two numbers are coprime", () => {
    expect(isCoprime(5, 7)).toBe(true);
});
