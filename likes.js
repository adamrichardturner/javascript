function likes(names) {
    /*
    You probably know the "like" system from Facebook and other pages. 
    People can "like" blog posts, pictures or other items. We want to 
    create the text that should be displayed next to such an item.

    Implement the function which takes an array containing the names of 
    people that like an item. It must return the display text as shown 
    in the examples:

    []                                -->  "no one likes this"
    ["Peter"]                         -->  "Peter likes this"
    ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
    */
   let likeString = '';
   if(names.length === 0) {
       return "no one likes this";
   } else if (names.length == 1) {
       return `${names[0]} likes this`
   } else if (names.length <= 3) {
       for(let i = 0; i < names.length; i++) {
           if(i === names.length - 1) {
               likeString += ' and ' + names[i];
           } else if (i === names.length - 2 && names.length !== 2) {
               likeString += ', ' + names[i];
           } else {
               likeString += names[i];
           }
       }
   } else {
       return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
   }
   return likeString + ' like this';
}
console.log(likes([])); // no one likes this
console.log(likes(['Peter'])); // Peter likes this
console.log(likes(["Jacob", "Alex"])); // Jacob and Alex like this
console.log(likes(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // Alex, Jacob and 2 others like this