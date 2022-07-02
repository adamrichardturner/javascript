const justCoolStuff = (arr1, arr2) => {
    /*
    Returns a new array with only elements that exist in both arrays.
    */
    return arr1.filter(word => arr2.includes(word));
}


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))