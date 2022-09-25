function count (string) {  
    /*
    The main idea is to count all the occurring characters in a string. 
    If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

    What if the string is empty? Then the result should be empty object literal, {}.
    */

    // Store our counts object here
    const counts = {};

    // Create the object skeleton {'a': 0, 'b': 0..etc}
    string.split('').forEach(e => {
        counts[e] = 0;
    });

    // Iterate the string again and increment count value for each key
    string.split('').forEach(e => {
        counts[e] += 1;
    });

    return counts;
}

console.log(count('aba')); // { a: 2, b: 1 }
console.log(count('')); // {}