function numberOfPairs(gloves) {
    /*
    Winter is coming, you must prepare your ski holidays. 
    The objective of this kata is to determine the number 
    of pair of gloves you can constitute from the gloves 
    you have in your drawer.

    Given an array describing the color of each glove, 
    return the number of pairs you can constitute, assuming 
    that only gloves of the same color can form pairs.

    Examples:
    input = ["red", "green", "red", "blue", "blue"]
    result = 2 (1 red pair + 1 blue pair)

    input = ["red", "red", "red", "red", "red", "red"]
    result = 3 (3 red pairs)
    */
   // Store in colours the individual colours of the gloves...
   const colours = [...new Set(gloves)];
   // Store in allGloves an object representation of the values in colours
   const allGloves = colours.reduce((a, b) => {
       return {...a, [b]: 0}
   }, {});
   // For each glove in gloves, if the glove is present in allGloves, increment it's value
   // This gives us a count of the number of gloves by colour...
   gloves.forEach(glove => glove in allGloves ? allGloves[glove] += 1 : allGloves[glove] += 0);
   // Following validation, return the values of allGloves / 2 to get pairs in floating point notation, Floor divide and sum
   // up to get the total number of valid pairs
   return (gloves.length > 0 ? Object.values(allGloves)
                                     .map(n => n / 2)
                                     .map(n => Math.floor(n)) : 0)
                                     .reduce((a, b) => a + b);
}

console.log(numberOfPairs(['red','red'])); // 1
console.log(numberOfPairs(['red','green','blue'])); // 0
console.log(numberOfPairs(["red", "green", "red", "blue", "blue"])); // 2
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"])); // 3