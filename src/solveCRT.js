const extendedGCD = require("./extendedGCD");

function solveCRT(remainders, moduli) {
    let x = remainders[0]; // Initial solution
    let lcmMod = moduli[0]; // Combined modulus

    for (let i = 1; i < moduli.length; i++) {
        const a1 = lcmMod;
        const b1 = moduli[i];
        const c1 = remainders[i] - x; // Adjust remainder

        const { gcd, x: inv, y } = extendedGCD(a1, b1);

        // If gcd does not divide c1, no solution exists
        if (c1 % gcd !== 0) {
            throw new Error("No solution exists for the given system.");
        }

        // Compute the next x using the formula: x = x0 + k * newModulus
        const factor = c1 / gcd;
        x = x + factor * inv * lcmMod;
        lcmMod = (lcmMod * moduli[i]) / gcd; // Compute new modulus
    }

    return ((x % lcmMod) + lcmMod) % lcmMod; // Ensure result is non-negative
}

module.exports = solveCRT;
