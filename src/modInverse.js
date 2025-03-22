const extendedGCD = require("./extendedGCD");

function modInverse(a, m) {
    a = ((a % m) + m) % m;  // Ensure a is within [0, m) range

    const { gcd, x } = extendedGCD(a, m);
    if (gcd !== 1) {
        throw new Error("Modular inverse does not exist");
    }

    return ((x % m) + m) % m;  // Ensure the result is positive
}

module.exports = modInverse;
