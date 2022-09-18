function findMissingLetter(array) {
    /*
    Write a method that takes an array of consecutive (increasing) letters as 
    input and that returns the missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter 
    be missing. The length of the array will always be at least 2.
    The array will always contain letters in only one case.

    Example:

    ['a','b','c','d','f'] -> 'e' 
    ['O','Q','R','S'] -> 'P'
    ["a","b","c","d","f"] -> "e"
    ["O","Q","R","S"] -> "P"
    */
    
    // Store our alphabet here
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // In index we store the index of the missing letter
    let index;
    // In indexes we store an array of all the indexes of alpha that 
    // correspond to array elements
    const indexes = [];
    // For each char in array...
    for(let i in array) {
        // Push to indexes, the index in alpha of the char in array...
        indexes.push(alpha.indexOf(array[i].toLowerCase()));
    }
    // For each index in indexes...
    for(let i = 0; i < indexes.length-1; i++) {
        // If the there is a gap greater than 1 between the elements...
        if(indexes[i+1] - indexes[i] > 1) {
            // Re-assign index as the number before the gap incremented
            // Giving us the index in the alphabet of the missing letter
            index = indexes[i] + 1;
        }
    }
    // If the array was upper/lower case, return the element at index accordingly
    return array[0] === array[0].toUpperCase() ? alpha[index].toUpperCase() : alpha[index];
}

console.log(findMissingLetter(['a','b','c','d','f'])); // e