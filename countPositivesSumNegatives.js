function countPositivesSumNegatives(input) {
    /*
    Given an array of integers.

    Return an array, where the first element is the count of positives 
    numbers and the second element is sum of negative numbers. 0 is neither 
    positive nor negative.

    If the input is an empty array or is null, return an empty array.

    Example
    For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
    should return [10, -65].
    */

    // If input is null or empty, return an empty array...
   if(input == null || input.length == 0) {
       return [];
   } else {
       // else we store in positives and sumNegatives are counts
       let positives = 0;
       let sumNegatives = 0;
       // for each element in input, if positive increment positives
       // if negative add to sumNegatives
       input.forEach(e => e > 0 ? positives++ : sumNegatives += e);
       // return the array as specified in docstring
       return [positives, sumNegatives];
   }
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); 
// [ 10, -65 ]