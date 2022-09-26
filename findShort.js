function findShort(s) {
    /*
    Simple, given a string of words, return the length of the shortest word(s).

    String will never be empty and you do not need to account for different data types.
    */
    return s.split(' ').reduce((a, b) => a.length <= b.length ? a : b).length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps')); // 3