const modInverse = require("./modInverse");

function solveCRT(remainders, moduli) {
    const product = moduli.reduce((acc, m) => acc * m, 1);
    let result = 0;

    for (let i = 0; i < moduli.length; i++) {
        const partialProduct = product / moduli[i];
        const inverse = modInverse(partialProduct, moduli[i]);
        result += remainders[i] * partialProduct * inverse;
    }

    return result % product;
}

module.exports = solveCRT;
