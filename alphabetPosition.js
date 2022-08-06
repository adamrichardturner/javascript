function alphabetPosition(text) {
    /*
    In this kata you are required to, given a string, replace every letter with its position in the alphabet.

    If anything in the text isn't a letter, ignore it and don't return it.

    "a" = 1, "b" = 2, etc.

    Example
    alphabetPosition("The sunset sets at twelve o' clock.")
    Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
    */
   // Store the alphabet here
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   // findPosition finds the number position in the alphabet of a given letter
   const findPosition = let => alphabet.indexOf(let) + 1;
   // regex will help us filter out non-alphabet characters
   const regex = /[!" #$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
   // Return lowercase text with regex validation then split / map each char with findPosition, filter out any 0s (not in alphabet)
   return text.toLowerCase().replace(regex, '').split('').map(char => findPosition(char)).filter(char => char !== 0).join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); 
// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
console.log(alphabetPosition("yq]n5_6z"));
// 25 17 14 26