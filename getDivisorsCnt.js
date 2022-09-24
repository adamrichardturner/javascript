function getDivisorsCnt(n) {
    /*
    Count the number of divisors of a positive integer n.

    Random tests go up to n = 500000.

    Examples (input --> output)
    4 --> 3 (1, 2, 4)
    5 --> 2 (1, 5)
    12 --> 6 (1, 2, 3, 4, 6, 12)
    30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
    */

    // Store in divisors our factors / divisors of n
    const divisors = [];
    // For each number from 1 to n inclusive...
    for (let i = 1; i <= n; i++) {
        // If n is divisible by i...
        if (n % i == 0) {
            // Push to divisors i
            divisors.push(i);
        }
    }
    // Return the length of divisors
    return divisors.length;
}

console.log(getDivisorsCnt(4)); // 3
console.log(getDivisorsCnt(5)); // 2
console.log(getDivisorsCnt(12)); // 6
console.log(getDivisorsCnt(30)); // 8