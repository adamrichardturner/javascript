function sortArray(array) {
    /*
    You will be given an array of numbers. 
    You have to sort the odd numbers in ascending order 
    while leaving the even numbers at their original positions.

    Examples
    [7, 1]  =>  [1, 7]
    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
    */

   // Store in odds an array of objects containing index of odd number and
   // the number itself...
   const odds = [];
   // Store in oddsIndexes the oddIndexes
   const oddsIndexes = [];
   // For each item in array...
   for(let i in array) {
       // If the item is odd...
       if(array[i] % 2 !== 0) {
           // Push an object containing index and the number to odds...
           odds.push({index: Number(i), num: array[i]});
           // Also push to oddsIndexes the index on its own
           oddsIndexes.push(i);
       }
   }
   // Compare is a sorting algorithm which will be used to sort odds in
   // ascending order.
   const compare = (a, b) => {
       if(a.num < b.num) {
           return -1;
       }
       if(a.num > b.num) {
           return 1;
       }
       return 0;
   }
   // Sorted contains the odd numbers sorted in ascending order with their indices...
   const sorted = odds.sort(compare)
   // For each item in oddsIndexes...
   for(let i in oddsIndexes) {
       // Re-assign the indexes in ascending order so we know what indices the odd 
       // numbers should be at in the final array...
       sorted[i].index = oddsIndexes[i];
   }
   // For each item in sorted...
   for(let i in sorted) {
       // Reassign the array values at the odd number indexes in sorted fashion...
       array[sorted[i].index] = sorted[i].num;
   }
   // Finally return the mutated array
   return array;
}

console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]