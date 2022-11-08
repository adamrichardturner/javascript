function removeEveryOther(arr) {
    /*
    Take an array and remove every second element from the array. 
    Always keep the first element and start removing with the next element.
    */
    return arr.filter((e, i) => i % 2 == 0 ? e : null);
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // ['Hello', 'Hello Again']