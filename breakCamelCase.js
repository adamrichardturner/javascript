function solution(string) {
    /*
    Complete the solution so that the function will break up camel casing, using a space between words.

    Example
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""
    */
   
    // Store in broken our final string representation
    let broken = '';
    // For each char in string...
    for(let i in string) {
        // If the char is uppercase...
        if(string[i] === string[i].toUpperCase()) {
            // Concatenate to broken a space and the char
            broken += ' ' + string[i];
        } else {
            // Else just concatenate the char
            broken += string[i];
        }
    }
    return broken;
}

console.log(solution('camelCasing')); // camel Casing
console.log(solution('identifier')); // identifier