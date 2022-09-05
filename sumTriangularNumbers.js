function sumTriangularNumbers(n) {
  /*
    Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

    Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation 
    of the natural numbers 1, 2, 3, 4, 5, etc."

    [01]
    02 [03]
    04 05 [06]
    07 08 09 [10]
    11 12 13 14 [15]
    16 17 18 19 20 [21]
    e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

    Triangular Numbers cannot be negative so return 0 if a negative number is given.
    */
  if (n <= 0) {
    return 0;
  } else {
    // Declare i. j and k as 1 - k will store our triangular numbers..
    let i,
      j = 1,
      k = 1;
    // Store in triangular our triangular numbers...
    let triangular = [1];
    for (i = 1; i < n; i++) {
      // j stores our temp variable with the next number to add to k
      j += 1;
      // in k we add j
      k += j;
      // push the value to triangular
      triangular.push(k);
    }
    // Return the sum of triangular numbers
    return triangular.reduce((a, b) => a + b);
  }
}

console.log(sumTriangularNumbers(4)); // 20
