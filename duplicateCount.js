function duplicateCount(text) {
    /*
    Write a function that will return the count of distinct case-insensitive 
    alphabetic characters and numeric digits that occur more than once in the 
    input string. 
    
    The input string can be assumed to contain only alphabets 
    (both uppercase and lowercase) and numeric digits.

    Example
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    */

    // Store in seen all case-insensitive chars that are duplicated
    // Note: Includes all occurences of any duplicated chars
    let seen = ''
    // Lowercase everything in text
    text = text.toLowerCase()
    // Iterate through text...
    text.split('').forEach(char => {
        // Construct a regular expression object using char as variable
        const re = new RegExp(char, "g")
        // If the frequency of the char in text is above 1...
        if(text.match(re).length > 1) {
            // Concatenate to seen the char, as it is duplicated
            seen += char
        }
    })
    // Return length of distinct chars in seen after removing duplicates
    return [...new Set(seen)].length
}

console.log(duplicateCount("aabbcde")) // 2
console.log(duplicateCount("Indivisibility")) // 1