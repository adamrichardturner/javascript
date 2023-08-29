function validParentheses(parenStr) {
    /*
    Write a function that takes a string of parentheses, and determines 
    if the order of the parentheses is valid. 
    The function should return true if the string is valid, and false if it's invalid.
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

    All inputs will be strings, consisting only of characters ( and ).
    Empty strings are considered balanced (and therefore valid), and will be tested.
    For languages with mutable strings, the inputs should not be mutated.
    */

    // Initial counter here
    let total = 0
    // Iterate over parenStr
    parenStr.split('').forEach((c) => {
        // If the counter is negative, we have uneven pairs of parenthesis
        if (total < 0) {
            return false
        } else if (c == '(') {
            // If opening parenthesis, increment counter
            total++
        } else if (c == ')') {
            // If closing, decrement
            total--
        }
    })
    // We should end with 0 if valid
    return !total
}

console.log(validParentheses('()')) // true
console.log(validParentheses(')(()))')) // false
console.log(validParentheses('(')) // false
console.log(validParentheses('(())((()())())')) // true
