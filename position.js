function position(letter) {
    /*
    When provided with a letter, return its position in the alphabet.
    
    Input :: "a"

    Ouput :: "Position of alphabet: 1"
    */
    let position = 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1;
    return `Position of alphabet: ${position}`;
}

console.log(position('z')); // Position of alphabet: 26