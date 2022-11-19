var encryptThis = function(text) {
    /*
    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
    The first letter must be converted to its ASCII code.
    The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.
    */
    return text.split(' ').map((e, i) => {
        // Store in a the ASCII code for first char
        const a = e.charCodeAt(0);
        // Store in b the second char to swap with last
        const b = e[1];
        // Store in c the last char to swap with second
        const c = e[e.length-1];
        // If b exists and e's length is greater than 2
        if(b && e.length > 2) {
            // Return the ASCII + last char + middle vals + second char
            return a + c + e.slice(2, e.length-1) + b;
        } else if (e.length === 2) {
            // If just a 2 length word, return a + b
            return a + b;
        } else {
            // Else return a
            return a;
        }
    }).join(' ');
}

console.log(encryptThis('A wise old owl lived in an oak')); // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"