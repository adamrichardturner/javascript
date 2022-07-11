function expandedForm(num) {
    /*
    You will be given a number and you will need to 
    return it as a string in Expanded Form. For example:

    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'
    NOTE: All numbers will be whole numbers greater than 0.
    */
   
   return num.toString() // Convert num into string form
             .split('') // Convert string into array of digits
             .reverse() // Reverse as we want to iterate right to left
             .map((n, i) => n != 0 ? n * (10 ** i) : n) // Multiply n by base^^index
             .reverse() // Reverse the above output
             .filter(i => i != 0) // Filter out lone zeros
             .join(' + '); // Join as a string with ' + ' as the delimiter
}

console.log(expandedForm(12)); // 10 + 2
console.log(expandedForm(42)); // 40 + 2
console.log(expandedForm(70304)); // 70000 + 300 + 4