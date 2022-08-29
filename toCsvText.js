function toCsvText(array) {
    /*
    Create a function that returns the CSV representation of a two-dimensional numeric array.

    Example:

    input:
    [[ 0, 1, 2, 3, 4 ],
        [ 10,11,12,13,14 ],
        [ 20,21,22,23,24 ],
        [ 30,31,32,33,34 ]] 
        
    output:
        '0,1,2,3,4\n'
        +'10,11,12,13,14\n'
        +'20,21,22,23,24\n'
        +'30,31,32,33,34'
    */
   // Store in newLines the array as a string with \n char appended to each set
   const newLines = array.map((val, i) => val + '\n').join('');
   // Return newLines without the final \n
   return newLines.slice(0, newLines.length - 1)
}

console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ] ));

//    0,1,2,3,45
//    10,11,12,13,14
//    20,21,22,23,24
//    30,31,32,33,34