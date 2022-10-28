function oddCount(n) {
    // Given a number n, return the number 
    // of positive odd numbers below n

    // Store our count of odd numbers below n here...
    let count = 0;
    // For each num descending from n-1 to 1...
    for(let i = n-1; i > 0; i--) {
        // If the num is odd, increment count
        i % 2 !== 0 ? count++ : 0;
    }
    return count;
}

console.log(oddCount(7)); // 3
console.log(oddCount(15023)); // 7