const modInverse = require("../src/modInverse");

test("Finds modular inverse", () => {
    expect(modInverse(3, 7)).toBe(5);
});
