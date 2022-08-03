/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
each statue having an non-negative integer size. Since he likes to make things perfect, 
he wants to arrange them from smallest to largest so that each statue will be bigger 
than the previous one exactly by 1. He may need some additional statues to be able to 
accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

*/

function solution(statues) {
    // Sort the statues in order from smallest to largest integers
    let sortedStatues = statues.sort();
    // Store our count of number of statues to fill here
    let count = [];
    // Loop through sortedStatues
    for(let i = 0; i < sortedStatues.length-1; i++) {
        // Declare a distance variable which will store how many statues
        // required to fill in the gaps
        let distance;
        // If the numbers are not consecutive...
        if(sortedStatues[i] !== sortedStatues[i+1] - 1) {
            // Determine the distance
            distance = sortedStatues[i+1] - sortedStatues[i] - 1;
            // Push the distance to the count array
            count.push(distance);
        } else if (i === sortedStatues.length) {
            break;
        }
    }
    if(count.length === 0) {
        // If no statues required, return 0...
        return 0;
    // Else, we sum the number of statues in count and return it
    } else {
        return count.reduce((a, b) => a + b);
    }
}

let testStatues = [8,5,6,1];
console.log(solution(testStatues)); // 3