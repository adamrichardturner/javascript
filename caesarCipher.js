function rot13(str) {
    /*
    One of the simplest and most widely known ciphers is a Caesar cipher, 
    also known as a shift cipher. In a shift cipher the meanings of the 
    letters are shifted by some set amount.

    A common modern use is the ROT13 cipher, where the values of the 
    letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

    Write a function which takes a ROT13 encoded string as input and 
    returns a decoded string.

    All letters will be uppercase. Do not transform any non-alphabetic 
    character (i.e. spaces, punctuation), but do pass them on.
    */

    const decrypted = str.split('').map((char) => {
        if (!/[A-Z]/.test(char)) {
            return char
        }
        let code = char.charCodeAt(0) - 13
        if (code < 65) {
            code += 26
        }
        return String.fromCharCode(code)
    })
    return decrypted.join('')
}

console.log(rot13('SERR PBQR PNZC')) // FREE CODE CAMP
console.log(rot13('SERR CVMMN!')) // FREE PIZZA!
console.log(rot13('SERR YBIR?')) // FREE LOVE?
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'))
//THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
