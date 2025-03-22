const extendedGCD = require("./extendedGCD");

function isCoprime(a, b) {
    return extendedGCD(a, b).gcd === 1;
}

module.exports = isCoprime;
