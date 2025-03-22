const isCoprime = require("../src/isCoprime");

test("Checks if two numbers are coprime", () => {
    expect(isCoprime(5, 7)).toBe(true);
});

test("Checks if two numbers are not coprime", () => {
    expect(isCoprime(6, 9)).toBe(false);
});

test("Checks if two prime numbers are coprime", () => {
    expect(isCoprime(13, 17)).toBe(true);
});

test("Checks if one number is 1", () => {
    expect(isCoprime(1, 10)).toBe(true);
});

test("Checks if two identical numbers are not coprime", () => {
    expect(isCoprime(8, 8)).toBe(false);
});

test("Checks if two large coprime numbers", () => {
    expect(isCoprime(1000003, 1000033)).toBe(true);
});
