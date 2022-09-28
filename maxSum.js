function maxSum(arr,range) {
    /*
    Given an array arr that contains some integers(positive, negative or 0), 
    and a range list such as [[start1,end1],[start2,end2],...], start and end 
    are the index of arr and start always less than end. Your task is to 
    calculate the sum value of each range (start index and end index are 
    both inclusive), and return the maximum sum value.

    For example:

    Given arr = [1,-2,3,4,-5,-4,3,2,1], 
        range = [[1,3],[0,4],[6,8]]
    should return 6
    */

    // Store in toSum our integer ranges to sum
    const toSum = [];
    // Store in summed the sum value of toSum's ranges
    const summed = [];
    // For each item in range...
    for(let i in range) {
        // Push toSum arr slices from start to end of each range
        toSum.push(arr.slice(range[i][0], range[i][1]+1));
    };
    // For each item in toSum...
    for(let i in toSum) {
        // Push to summed the sum value of each range in toSum
        summed.push(toSum[i].reduce((a, b) => a + b));
    }
    // Return the max value of summed
    return Math.max.apply(0, summed);
}

console.log(maxSum([1,-2,3,4,-5,-4,3,2,1], [[1,3],[0,4],[6,8]])); // 6