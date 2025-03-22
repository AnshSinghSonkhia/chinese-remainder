function generateRandomCRTSystem(count, maxModulus) {
    const remainders = Array.from({ length: count }, () => Math.floor(Math.random() * maxModulus));
    const moduli = Array.from({ length: count }, () => Math.floor(Math.random() * maxModulus) + 1);
    
    return { remainders, moduli };
}

module.exports = generateRandomCRTSystem;
