const extendedGCD = require("./extendedGCD");

function modInverse(a, m) {
    const { gcd, x } = extendedGCD(a, m);
    if (gcd !== 1) {
        throw new Error("Modular inverse does not exist");
    }
    return ((x % m) + m) % m;
}

module.exports = modInverse;
