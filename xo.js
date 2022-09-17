function XO(str) {
    /*
    Check to see if a string has the same amount of 'x's and 'o's. 
    The method must return a boolean and be case insensitive. 
    The string can contain any char.

    Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
    */

    // Store our counts of x and o here...
    let xCount = 0;
    let oCount = 0;
    for(let i in str) {
        // If the char is case-insensitive x, increment xCount
        if(str[i] === 'x' || str[i] === 'X') {
            xCount++;
        // If the char is case-insensitive o, increment oCount
        } else if (str[i] === 'o' || str[i] === 'O') {
            oCount++;
        }
    }
    // Return value of whether xCount and oCount are equal
    return xCount === oCount;
}

console.log(XO("ooxx")); // true