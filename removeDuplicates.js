function solve(arr) {
    /*
    Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

    Example:
    For input: [3, 4, 4, 3, 6, 3]

    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3
    Expected output: [4, 6, 3]

    More examples can be found in the test cases.
    */

   // Store in unique our unique values
   let unique = [];
   // For each element in arr from the end...
   for(let i = arr.length-1; i >= 0; i--) {
    // If unique includes that element, continue...
    if(unique.includes(arr[i])) {
        continue;
    } else {
        // else add that unique value to unique
        unique.push(arr[i]);
    }

   }
   // Reeturn the unique values reversed, as we added them in reverse
   return unique.reverse();
}

console.log(solve([3, 4, 4, 3, 6, 3])); // [ 4, 6, 3 ]