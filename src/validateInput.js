function validateInput(remainders, moduli) {
    if (!Array.isArray(remainders) || !Array.isArray(moduli)) {
        throw new Error("Both remainders and moduli should be arrays");
    }
    if (remainders.length !== moduli.length) {
        throw new Error("Remainders and moduli must have the same length");
    }
    if (moduli.some(m => m <= 0)) {
        throw new Error("Moduli must be positive integers");
    }
}

module.exports = validateInput;
