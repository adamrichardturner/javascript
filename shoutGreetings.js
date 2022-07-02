const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = arr => {
    return arr.map(word => word.toUpperCase() + '!');
}

console.log(shoutGreetings(greetings));