const allElseEqual = arr => {
    /*
    Write a function allElseEqual that takes in an array of numbers. 
    The function should return the element of the array that is equal 
    to half of the sum of all elements of the array. If there is no 
    such element, the method should return null.
    */
    // Store in sum our total of all numbers...
    const sum = arr.reduce((a, b) => a + b);
    // Return the element that is half of sum
    const half = arr.filter(e => e == sum / 2);
    // Ternary to return half or null
    return half.length > 0 ? half[0] : null;
}

console.log(allElseEqual([2, 5, 3, 0])) // 5
console.log(allElseEqual([2, 5, 3, 10])) // 10
console.log(allElseEqual([2, 4, 3, 0])) // null