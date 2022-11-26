function SeriesSum(n) {
    /*
    Your task is to write a function which returns the sum of following series upto nth term(parameter).

    Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
    Rules:
    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.

    Examples:(Input --> Output)
    1 --> 1 --> "1.00"
    2 --> 1 + 1/4 --> "1.25"
    5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
    */

    // Our sum value holds the final figure following the series upto n
    let sum = 1;
    // Denom is the current iteration of the loop's denominator value
    let denom = 1;
    // For each value from 2 to n...
    for (let i = 2; i <= n; i++) {
        // Increment denom by 3 on each iteration
        denom += 3;
        // Add to sum: 1 divided by denom
        sum += (1 / denom);
    }
    // Return 0.00 if n is 0, else, return the String representation of sum
    // to 2 decimal places
    return n === 0 ? '0.00' : String(sum.toFixed(2));
}

console.log(SeriesSum(1)); // 1.00
console.log(SeriesSum(2)); // 1.25
console.log(SeriesSum(5)); // 1.57