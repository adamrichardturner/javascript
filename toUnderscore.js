function toUnderscore(string) {
    /*
    Complete the function/method so that it takes a PascalCase 
    string and returns the string in snake_case notation. 
    Lowercase characters can be numbers. 
    
    If the method gets a number as input, it should return a string.
    */

    // If input string is a number, return that number as a string
    if (typeof string === 'number') {
        return String(string)
    }

    // Store here all indexes of capital letters in string as array
    const indexes = string
        .split('')
        .map((e, i) => (/[A-Z]/.test(e) ? i : -1))
        .filter((n) => n > 0)

    // Return string lower-cased with '_' concatenated before
    // the string indexes that match the indexes determined above
    return string
        .toLowerCase()
        .split('')
        .map((e, i) => (indexes.includes(i) ? '_' + e : e))
        .join('')
}

console.log(toUnderscore('TestController')) // 'test_controller'
console.log(toUnderscore('MoviesAndBooks')) // 'movies_and_books'
console.log(toUnderscore('App7Test')) // 'app7_test'
console.log(toUnderscore(1)) // '1'
