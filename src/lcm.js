function lcm(a, b) {
    return Math.abs(a * b) / gcd(Math.abs(a), Math.abs(b));
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

module.exports = lcm;
