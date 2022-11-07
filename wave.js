function wave(str) {
    /*
    In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
    You will be passed a string and you must return that string in an array where an uppercase 
    letter is a person standing up. 
    */

    // Store in wave our finished wave array
    const wave = [];
    // Store in text a copy of the str
    const text = str;
    // Split str and for each char
    // if the char isn't a space push to wave the chars before char, char uppercase, and after
    str.split('').forEach((e, i) => e !== ' ' ? wave.push(text.slice(0, i) + e.toUpperCase() + text.slice(i+1)) : null)
    return wave;
}

console.log(wave('hello')); // [ 'Hello', 'hEllo', 'heLlo', 'helLo', 'hellO' ]