const findMyKeys = arr => {
    /* 
    Finds the string 'keys' in an array of strings, if found it returns
    the index of 'keys' if not, -1.
    */
    if(arr.includes('keys')) {
        return arr.indexOf('keys');
    } else {
        return -1;
    }
}

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4