function findUniq(arr) {
    /*
    There is an array with some numbers. All numbers are equal except for one. Try to find it!

    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
    It’s guaranteed that array contains at least 3 numbers.

    The tests contain some very huge arrays, so think about performance.
    */

   // Store in a, b the unique values available in arr
   const [a, b] = new Set(arr);
   // getCount finds the count of each value in a given array
   const getCount = (arr, val) => arr.filter((v) => (v === val)).length;
   // The greater count indicates non-unique values, return b if a or a if b
   return getCount(arr, a) > getCount(arr, b) ? b : a;
}

console.log(findUniq([ 1, 0, 0 ])); // 1
console.log(findUniq([ 0, 1, 0 ])); // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([3, 3, 3, 3, 3, 3, 2])); // 2
  