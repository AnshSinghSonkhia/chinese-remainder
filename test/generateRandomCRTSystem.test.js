const generateRandomCRTSystem = require("../src/generateRandomCRTSystem");

test("Generates valid CRT system", () => {
    const { remainders, moduli } = generateRandomCRTSystem(3, 10);
    expect(remainders.length).toBe(3);
    expect(moduli.length).toBe(3);
});
