function twoSum(numbers, target) {
    /*
    Write a function that takes an array of numbers (integers for the tests) and a target number. 
    It should find two different items in the array that, when added together, give the target value. 
    The indices of these items should then be returned in a tuple / list (depending on your language) 
    like so: (index1, index2).

    For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

    The input will always be valid (numbers will be an array of length 2 or greater, and all of the items 
    will be numbers; target will always be the sum of two different items from that array).

    twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
    */

    // For each item in numbers...
    for(let i = 0; i < numbers.length; i++) {
        // For each iteration of above, iterate numbers...
        for(let j = 0; j < numbers.length; j++) {
            // If i === j we skip the value, as that would be adding 
            // the same numbers index together...
            if(i === j) {
                continue;
            } else {
                // Otherwise, we just check if the number pair === target
                if(numbers[i] + numbers[j] === target) {
                    // Thus returning the pair that when summed equal target
                    return [i, j];
                }
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4)); // [ 0, 2 ]
console.log(twoSum([2, 2, 3], 4)); // [ 0, 1 ]