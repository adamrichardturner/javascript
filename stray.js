function stray(numbers) {
    /*
    You are given an odd-length array of integers, in which all of them are the same, except for one single number.

    Complete the method which accepts such an array, and returns that single different number.

    The input array will always be valid! (odd-length >= 3)

    Examples
    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3
    */

    // In seen we store the element of numbers that is not stray
    let seen;
    // For each element in numbers
    for(let i in numbers) {
        // If the element is equal to seen
        if(seen === numbers[i]) {
            // Break the loop, we've found the non-stray number
            break;
        } else {
            // Else, seen should be reassigned to the element
            seen = numbers[i]
        }
    }
    // Filter numbers for all elements not equal to non-stray and return 
    // the 0th index
    return numbers.filter(e => e !== seen)[0];
}

console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3