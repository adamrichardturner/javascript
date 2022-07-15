function countSmileys(arr) {
    /*
    Given an array (arr) as an argument complete the function countSmileys that should 
    return the total number of smiling faces.

    Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. 
    
    Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D
    No additional characters are allowed except for those mentioned.

    Valid smiley face examples: :) :D ;-D :~)
    Invalid smiley faces: ;( :> :} :]

    Example
    countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
    countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
    countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
    Note
    In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
    */

   // Store in smileys an array of valid smileys. Using if statements to check the validity of chars
   // for each stage in building the smiley.
   
   let smileys = arr.filter(face => {
       if(face.length === 3) {
           if(face[0] === ':' || face[0] === ';') {
               if(face[1] === '-' || face[1] === '~') {
                   if(face[2] === ')' || face[2] === 'D') {
                       return true;
                   }
               }
           }
       } else if (face.length === 2) {
           if(face[0] === ':' || face[0] === ';') {
               if(face[1] === ')' || face[1] === 'D') {
                   return true
               }
           }
       } else {
           return 0;
       }
   })
   return arr.length !== 0 ? smileys.length : 0;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;