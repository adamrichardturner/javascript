const numbers = [2, 7, 9, 171, 52, 33, 14]

// Function that squares numbers as input.
const toSquare = num => num * num
// Function that squares each number in input array 
// and returns a new array with the squared numbers.
const squareNums = nums => nums.map(toSquare);

console.log(squareNums(numbers));