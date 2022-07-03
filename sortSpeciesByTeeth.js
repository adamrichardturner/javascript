// compareTeeth compares each array element (object) and returns whether a > b of the numTeeth property.
const compareTeeth = (species1, species2) => species1.numTeeth > species2.numTeeth
// Sorts an array of animal objects and returns in ascending order by numTeeth property.
const sortSpeciesByTeeth = arr => arr.sort(compareTeeth)

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
console.log(sortSpeciesByTeeth(speciesArray))