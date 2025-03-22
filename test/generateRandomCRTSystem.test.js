const generateRandomCRTSystem = require("../src/generateRandomCRTSystem");

test("Generates valid CRT system", () => {
    const { remainders, moduli } = generateRandomCRTSystem(3, 10);
    expect(remainders.length).toBe(3);
    expect(moduli.length).toBe(3);
});

test("Remainders are within the correct range", () => {
    const { remainders } = generateRandomCRTSystem(5, 20);
    remainders.forEach(remainder => {
        expect(remainder).toBeGreaterThanOrEqual(0);
        expect(remainder).toBeLessThan(20);
    });
});

test("Moduli are within the correct range and non-zero", () => {
    const { moduli } = generateRandomCRTSystem(5, 20);
    moduli.forEach(modulus => {
        expect(modulus).toBeGreaterThan(0);
        expect(modulus).toBeLessThanOrEqual(20);
    });
});

test("Handles zero count correctly", () => {
    const { remainders, moduli } = generateRandomCRTSystem(0, 10);
    expect(remainders.length).toBe(0);
    expect(moduli.length).toBe(0);
});

test("Handles large count correctly", () => {
    const { remainders, moduli } = generateRandomCRTSystem(1000, 50);
    expect(remainders.length).toBe(1000);
    expect(moduli.length).toBe(1000);
});
