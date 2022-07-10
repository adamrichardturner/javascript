function gimme (triplet) {
    /*
    As a part of this Kata, you need to create a function that when 
    provided with a triplet, returns the index of the numerical element 
    that lies between the other two elements.

    The input to the function will be an array of three distinct numbers (Haskell: a tuple).

    For example:

    gimme([2, 3, 1]) => 0
    2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

    Another example (just to make sure it is clear):

    gimme([5, 10, 14]) => 1
    10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
    */

   // Store our min and max values in triplet in a & b
   let a = Math.min.apply(Math, triplet);
   let b = Math.max.apply(Math, triplet);
   // Store the value that sits between min and max (a, b) here
   let value;
   // Loop through triplet and reassign value to the value that is neither a or b
   for(let i in triplet) {
       if(triplet[i] !== a && triplet[i] !== b) {
           value = triplet[i];
       }
   }
   // Return the index of value, the number that sits between min and max (a, b)
   return triplet.indexOf(value);
}

console.log(gimme([2, 3, 1])) // 0 
console.log(gimme([5, 10, 14])) // 1