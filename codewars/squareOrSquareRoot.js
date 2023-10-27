function squareOrSquareRoot(array) {
    return array.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num ** 2)
}

console.log(squareOrSquareRoot([4,3,9,7,2,1])) // [2,9,3,49,4,1]