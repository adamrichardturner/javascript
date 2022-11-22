const sieveOfEratosthenes = (limit) => {
    // Validate our input for 1 or less
    if (limit <= 1) {
        return [];
    }
    // Store in output an array of true values upto limit
    const output = new Array(limit + 1).fill(true);
    output[0] = false; // 2 and 3 are false
    output[1] = false;

    // Iterate from 2 to the sqrt of limit
    for (let i = 2; i <= Math.pow(limit, 0.5); i++) {
        // If the value at index i of output is true
        if (output[i] === true) {
            // Mark all multiplies of i as non-prime
            for (let j = Math.pow(i, 2); j <= limit; j+=i) {
                output[j] = false;
            }
        }
    }
    // Return an array with only the indices of the primes in output
    return output.map((e, i) => e ? i : null).filter(e => e !== null);
}

const test = sieveOfEratosthenes(13);
console.log(test); // [2, 3, 5, 7, 11, 13]