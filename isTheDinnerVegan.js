const isTheDinnerVegan = arr => {
    /*
    Function that takes an array of food objects and returns 
    true if every food object is plant based.
    */
    return arr.every(item => item.source === 'plant');
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false