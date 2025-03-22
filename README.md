# chinese-remainder

Chinese-remainder is a JavaScript library for solving modular equations using the Chinese Remainder Theorem (CRT). It provides functions for modular arithmetic, including modular inverses, GCD, LCM, and input validation. Ideal for number theory, cryptography, and competitive programming.


<code><img height="30" src="https://img.shields.io/badge/NPM-111111?style=for-the-badge&logo=npm&logoColor=#c63635"></code>  <code><img height="30" src="https://img.shields.io/badge/JavaScript-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>

## Features

✅ Solve modular equations using Chinese Remainder Theorem

✅ Supports coprime and non-coprime moduli

✅ Uses Extended Euclidean Algorithm for modular inverse calculations

✅ Lightweight and dependency-free

## Installation
Install the package via npm:

```sh
npm i chinese-remainder
```


--- 

# Importing

### For CommonJS (Node.js Default)

```js
const chirem = require('chinese-remainder');
```

---

# Usage
Solve a system of modular equations:

```js
const chirem = require('chinese-remainder');

const remainders = [2, 3, 2];  
const moduli = [3, 5, 7];

console.log(chirem.solveCRT(remainders, moduli));  
```

# API Reference

| Function                        | Description                                                                 | Example Input           | Example Output                           |
|---------------------------------|-----------------------------------------------------------------------------|-------------------------|------------------------------------------|
| `solveCRT(remainders, moduli)`  | Solves a system of congruences using CRT. Returns { solution, modulus }.    | `[2, 3, 2], [3, 5, 7]`  | `{ solution: 23, modulus: 105 }`         |
| `extendedGCD(a, b)`             | Computes the greatest common divisor (GCD) and Bézout coefficients for ax + by = gcd(a, b). | `30, 20`                | `{ gcd: 10, x: 1, y: -1 }`               |
| `modInverse(a, m)`              | Computes the modular inverse of a modulo m using the Extended Euclidean Algorithm. | `3, 7`                  | `5`                                      |
| `lcm(a, b)`                     | Computes the least common multiple of two numbers. Useful for non-coprime moduli. | `6, 9`                  | `18`                                     |
| `isCoprime(a, b)`               | Checks if two numbers are coprime (gcd(a, b) === 1).                         | `3, 5`                  | `true`                                   |
| `validateInput(remainders, moduli)` | Ensures the input arrays are valid (same length, positive moduli, etc.). | `[2, 3], [3, 5]`        | Throws error if invalid                  |
| `generateRandomCRTSystem(count, maxModulus)` | Generates a random system of modular equations for testing. | `3, 10`                 | `{ remainders: [...], moduli: [...] }`   |


## Contributing
Want to improve chinese-remainder? Follow these steps:

1. Fork the repo

2. Create a new branch

3. Commit your changes

4. Push to your branch

5. Submit a pull request!