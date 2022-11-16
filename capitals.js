var capitals = function (word) {
    /*
    Write a function that takes a single string (word) as argument. 
    The function must return an ordered list containing the indexes 
    of all capital letters in the string.
    */
    return word.split('').map((e, i) => e === e.toUpperCase() ? i : 't').filter(e => e != 't');
};

console.log(capitals('CodEWaRs')); // [0,3,4,6]