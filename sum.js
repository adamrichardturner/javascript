function sum() {
    /*
    Write a function that finds the sum of all its arguments.
    */
    
    // Store in total our total of the arguments...
    let total = 0;
    // If arguments is empty, return 0
    if(arguments.length == 0) {
        return 0;
    } else {
        // Else loop through arguments and add to total
        for(let i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
    }
    return total;
}

console.log(sum(12, 1, 1, 1, 1, 1, 1)); // 18