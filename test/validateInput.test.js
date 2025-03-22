const validateInput = require("../src/validateInput");

test("Validates correct input", () => {
    expect(() => validateInput([1, 2], [3, 4])).not.toThrow();
});

test("Throws error for invalid input", () => {
    expect(() => validateInput([1, 2], [3])).toThrow();
});
