function countHalloweenEmojis(str) {
    /*
    Given a string, you are required to write a function 
    that counts the number of pumpkin (🎃) and ghost (👻) 
    emojis in the string. 
    
    The function should return an 
    object with the count of each emoji.
    */

    const pumpkins = (str.match(/🎃/g) || []).length
    const ghosts = (str.match(/👻/g) || []).length
    return {
        pumpkins,
        ghosts
    }
}

console.log(countHalloweenEmojis("Happy Halloween! 🎃🎃👻")); 
// Output: { pumpkins: 2, ghosts: 1 }

console.log(countHalloweenEmojis("Boo! 👻👻👻"));
// Output: { pumpkins: 0, ghosts: 3 }

console.log(countHalloweenEmojis("I love 🎃 pie!"));
// Output: { pumpkins: 1, ghosts: 0 }

console.log(countHalloweenEmojis("No emojis here."));
// Output: { pumpkins: 0, ghosts: 0 }