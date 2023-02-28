function solution(number) {
    /*
    If we list all the natural numbers below 10 that are multiples 
    of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Finish the solution so that it returns the sum of all the multiples 
    of 3 or 5 below the number passed in. Additionally, if the number 
    is negative, return 0 (for languages that do have them).

    Note: If the number is a multiple of both 3 and 5, only count it once.
    */

    // For all numbers above 0 (else just return 0)...
    return number > 0 ? 
        // Generate a range from 0 to number...
        [...Array(number).keys()]
            // Filter to only include multiples of 3 or 5
            .filter(e => (e % 3 == 0 || e % 5 == 0))
            // Sum the filtered array
            .reduce((a, b) => a + b) 
        : 0;
}

console.log(solution(20)); // 78