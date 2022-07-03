/*
Write a function groceries() that takes an array of object literals of grocery items. 
The function should return a string with each item separated by a comma except the last 
two items should be separated by the word 'and'. Make sure spaces (' ') are inserted 
where they are appropriate.
*/

const groceries = arr => {
    // Convert array of objects to an array of items...
    let items = arr.map(prop => prop.item);
    // Initialise our string...
    let groceryList = '';
    // Add first element to string...
    groceryList += items[0];
    // Loop through the rest of the elements...
    for(let i = 1; i < items.length; i++) {
        // If we are at the last element, append ' and ' to string...
        if(i === items.length - 1) {
            groceryList += ' and ' + items[i];
        } else {
            // Else we append comma + the item.
            groceryList += ', ' + items[i];
        }
    }
    return groceryList;
}


console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
// returns 'Bread and Butter'
 
console.log(groceries( [{item: 'Cheese Balls'}] ));
// returns 'Cheese Balls'