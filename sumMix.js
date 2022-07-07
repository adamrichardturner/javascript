function sumMix(x){
    /*
    Given an array of integers as strings and numbers, return the sum 
    of the array values as if all were numbers.

    Return your answer as a number.
    */
   return x.reduce((a, b) => typeof a === 'string' || typeof b === 'string' ? parseInt(a) + parseInt(b) : a + b);
}

const example = ['5', '0', 9, 3, 2, 1, '9', 6, 7];
console.log(sumMix(example)); // 42