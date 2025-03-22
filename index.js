const solveCRT = require("./src/solveCRT");
const modInverse = require("./src/modInverse");
const extendedGCD = require("./src/extendedGCD");
const lcm = require("./src/lcm");
const isCoprime = require("./src/isCoprime");
const validateInput = require("./src/validateInput");
const generateRandomCRTSystem = require("./src/generateRandomCRTSystem");

module.exports = {
    solveCRT,
    modInverse,
    extendedGCD,
    lcm,
    isCoprime,
    validateInput,
    generateRandomCRTSystem
};
