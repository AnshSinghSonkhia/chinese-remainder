const modInverse = require("../src/modInverse");

test("Finds modular inverse", () => {
    expect(modInverse(3, 7)).toBe(5);
});

test("Finds modular inverse for larger numbers", () => {
    expect(modInverse(10, 17)).toBe(12);
});

test("Finds modular inverse when a is greater than m", () => {
    expect(modInverse(14, 11)).toBe(4);
});

test("Throws error when modular inverse does not exist", () => {
    expect(() => modInverse(6, 9)).toThrow("Modular inverse does not exist");
});

test("Finds modular inverse for negative numbers", () => {
    expect(modInverse(-3, 11)).toBe(7);
});
