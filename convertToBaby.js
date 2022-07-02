const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = arr => {
    /*
    Function that takes an array as input and returns a new array with baby
    prepended to each array element.
    */

    // Loop through each element in the array and add to new array with the word
    // baby prepended to it with a space.
   let babyAnimals = [];
   // Loop through each element in the array and push it to babyAnimals with 'baby'
   // and a space prepended to it.
   for (let i = 0; i < arr.length; i++) {
       babyAnimals.push(`baby ${arr[i]}`);
   }
   return babyAnimals;
}

console.log(convertToBaby(animals));