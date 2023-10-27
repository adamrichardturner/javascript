function pigIt(str) {
    // Move the first letter of each word to the end of it, 
    // then add "ay" to the end of the word. 
    // Leave punctuation marks untouched.
    return str.split(' ').map(w => {
        if (w.match(/[^a-z]/i)) return w
        return w.slice(1) + w[0] + 'ay'
    }).join(' ')
}

// Examples
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !
