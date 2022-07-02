const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const compareTeeth = (species1, species2) => species1.numTeeth > species2.numTeeth

const sortSpeciesByTeeth = arr => arr.sort(compareTeeth)

console.log(sortSpeciesByTeeth(speciesArray))