function encode(plaintext) {
    /*
    First, you need to reverse the string. Then, the last character 
    in the original string (the first character in the reversed string) 
    needs to be moved to the back. Words will be separated by spaces, 
    and punctuation marks can be counted as part of the word.

    Example
    encode("Hello World!"); // => "lleHo dlroW!"

    This is because "Hello" reversed is "olleH" and "o" is moved to 
    the back, and so on. The exclamation mark is considered to be 
    part of the word "World".
    */
    return plaintext
        .split(' ')
        .map((word) => {
            if (word.length > 0) {
                let reversed = word.split('').reverse().join('')
                return reversed.substring(1) + reversed[0]
            }
        })
        .join(' ')
}

console.log(encode('Hello World!')) // Outputs: "lleHo dlroW!"
