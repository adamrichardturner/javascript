function minDistance(n) {
    /*
    Write a function that returns the smallest distance between two factors of a number. 
    The input will always be a number greater than one.

    Example:

    13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

    Hence the asnwer will be 2 (=13-11)
    */

   // Store in factors the factors of n...
   const factors = [];
   // Loop through every integer upto n...
   for(let i = 0; i <= n; i++) {
       // If the integer can be divided into n it is a factor...
       if(n % i == 0) {
           // So we push it to factors...
           factors.push(i);
       }
   }
   // In distances, we store the distance between each factor pair in factors
   const distances = factors.map((a, i) => factors[i+1] - factors[i]);
   // Remove the NaN value generated in final iteration of the above map call
   distances.pop();
   // Return the minimum distance between the factor pairs
   return Math.min.apply(null, distances)
}

console.log(minDistance(13013)); // 2