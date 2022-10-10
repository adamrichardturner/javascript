function firstNonConsecutive(arr) {
  /*
    Your task is to find the first element of an array that is not consecutive.

    By not consecutive we mean not exactly 1 larger than the previous element of the array.

    E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive 
    but 6 is not, so that's the first non-consecutive number.

    If the whole array is consecutive then return null.
  */
  // For each item in arr
  for (let i = 0; i < arr.length - 1; i++) {
    // If the next item minus the prev is not equal to 1
    if (arr[i + 1] - arr[i] !== 1) {
      // Return the next item (it's not consecutive)
      return arr[i + 1];
    }
  }
  // Return null otherwise if the loop didn't return as above
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7])); // null
