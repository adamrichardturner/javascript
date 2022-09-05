function makePassword(phrase) {
    /*
    One suggestion to build a satisfactory password is to start with a memorable phrase 
    or sentence and make a password by extracting the first letter of each word.

    Even better is to replace some of those letters with numbers 
    (e.g., the letter O can be replaced with the number 0):

    instead of including i or I put the number 1 in the password;
    instead of including o or O put the number 0 in the password;
    instead of including s or S put the number 5 in the password.
    Examples:
    "Give me liberty or give me death"  --> "Gml0gmd"
    "Keep Calm and Carry On"            --> "KCaC0"
    */
    
    // Split our string into an array of words, iterate over each word with map...
    return phrase.split(' ').map(e => {
        // If the first letter (lowercased) is i, o, s - return 1,0 or 5.
        switch(e[0].toLowerCase()) {
            case 'i':
                return '1';
            case 'o':
                return '0';
            case 's':
                return '5';
            default:
                // Else just return the first char of the word...
                return e[0];
        }
    }).join('');
}

console.log(makePassword('Give me liberty or give me death')); // Gml0gmd
console.log(makePassword('Keep Calm and Carry On')); // KCaC0