function findOdd(A) {
    /*
    Given an array of integers, find the one that appears an odd number of times.

    There will always be only one integer that appears an odd number of times.

    Examples
    [7] should return 7, because it occurs 1 time (which is odd).
    [0] should return 0, because it occurs 1 time (which is odd).
    [1,1,2] should return 2, because it occurs 1 time (which is odd).
    [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
    */

   // Store in counts an object with As values as keys and count as values
   let counts = {};
   // For each num in A...
   for(const num in A) { 
       // If the key exists...
       if(counts[A[num]]) {
           // Add 1 to the value
           counts[A[num]] += 1;
           // Else the value is just 1
       } else {
           counts[A[num]] = 1;
       }
   }
   // Store in odd the odd value in counts
   const odd = Object.values(counts).filter(a => a % 2 !== 0)[0];
   // Return the key which matches the odd value above
   return Number(Object.keys(counts).find(key => counts[key] === odd));
}

console.log(findOdd([0,1,0,1,0])); 