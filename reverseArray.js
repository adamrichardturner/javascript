const sentence = ['sense.','make', 'all', 'will', 'This'];

const reverseArray = arr => {
    /* 
    Takes an array as input and returns the reverse representation
    of that array.
    */
    let reversed = [];
    // Loop through the array from the last element and push each element
    // into the new reversed array, returning that at the end of the function.
    for(let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseArray(sentence));