function extendedGCD(a, b) {
    if (b === 0) return { gcd: a, x: 1, y: 0 };
    
    const { gcd, x, y } = extendedGCD(b, a % b);
    return { gcd, x: y, y: x - Math.floor(a / b) * y };
}

module.exports = extendedGCD;
