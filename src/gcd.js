function gcd(a, b) {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

module.exports = gcd;
