function twoHighest(arr) {
    /*
    In this kata, your job is to return the two distinct highest values in a list. 
    If there're less than 2 unique values, return as many of them, as possible.

    The result should also be ordered from highest to lowest.

    Examples:

    [4, 10, 10, 9]  =>  [10, 9]
    [1, 1, 1]  =>  [1]
    []  =>  []
    */

    // Sort array in descending order and store in uniqueSort the unique values
    const uniqueSort = [...new Set(arr)].sort((a, b) => b - a)
    // If the length of uniqueSort is less than 2
    return uniqueSort.length < 2
        ? // If the arr.length is less than or equal to 0
          arr.length <= 0
            ? // Return empty array
              []
            : // Else return the 0th index
              [arr[0]]
        : // Array length greater than 0, return first two values of uniqueSort
          [uniqueSort[0], uniqueSort[1]]
}

console.log(twoHighest([4, 10, 10, 9])) // [ 10, 9 ]
console.log(twoHighest([1, 1, 1])) // [ 1 ]
console.log(twoHighest([])) // []
