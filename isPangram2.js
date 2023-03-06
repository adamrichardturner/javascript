function isPangram(string) {
    /*
    A pangram is a sentence that contains every single letter of the alphabet at least once. 
    For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
    because it uses the letters A-Z at least once (case is irrelevant).

    Given a string, detect whether or not it is a pangram. Return True if it is, 
    False if not. Ignore numbers and punctuation.
    */

    // Store in alpha our alphabet
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    // In alpha will contain all instances of chars in string that are in the alphabet
    let inAlpha = ''
    // Convert string to lowercase to account for capital letters
    string = string.toLowerCase()
    // Iterate through string
    for(let i = 0; i < string.length; i++) {
        // If the element is within the alpha string...
        if(alpha.includes(string[i])) {
            // Concatenate it to inAlpha
            inAlpha += string[i]
        }
    }
    // inAlpha contains duplicates, convert to set, if length equal to 26, it is a pangram
    return [...new Set(inAlpha)].length === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true