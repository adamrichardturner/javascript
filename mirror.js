const mirror = obj => {
    /*
    Can you mirror the properties on an object?

    Given an object with properties with no value

    abc: -
    arara: -
    xyz: -
    Return a new object that have the properties with its mirrored key!

    abc: cba
    arara: arara
    xyz: zyx
    "You cannot change the original object, because if you did that the reflection would change."
    */
   let newObj = {...obj};
   for(key in newObj) {
       newObj[key] = key.split('').reverse().join('');
   }
   return newObj
};

console.log(mirror({abc: undefined, arara: undefined,}));