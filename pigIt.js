function pigIt(str) {
    /*
    Move the first letter of each word to the end of it, then add "ay" 
    to the end of the word. Leave punctuation marks untouched.

    Examples
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
    */

   return str.split(' ') // Split the string on spaces
             .map(w => /^[a-zA-Z]+$/ // Regex to check each char in alphabet
             .test(w.split()) // If each char in alphabet...
             ? w.slice(1, w.length) + w[0] + 'ay' : // Move chars with slice as per docstring
             w.split()).join(' ') // If not in alphabet, just display the char and join the string
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !