function binaryPyramid(m,n) {
    /*
    Given two numbers m and n, such that 0 ≤ m ≤ n :

    convert all numbers from m to n (inclusive) to binary
    sum them as if they were in base 10
    convert the result to binary
    return as a string
    Example
    1, 4  -->  1111010

    because:
        1  // 1 in binary is 1
    +  10  // 2 in binary is 10
    +  11  // 3 in binary is 11
    + 100  // 4 in binary is 100
    -----
    122  // 122 in binary is 1111010
    */
   
    const decToBinary = num => {
    // Convert from decimal to binary
        if(num >= 1) {
            if(num % 2) {
                return decToBinary((num - 1) / 2) + 1;
            } else {
                return decToBinary(num / 2) + 0;
            }
        } else {
            return '';
        }
    }
    // We store our binary representations here
    const arr = [];
    // Loop from m to n (inclusive)...
    for(let i = m; i <= n; i++) {
        // Push to arr the dec > binary conversions as strings
        arr.push(decToBinary(i));
    }
    // In res we store our binary sum in decimal
    let res = 0;
    for(let i in arr) {
        res += Number(arr[i])
    }
    // Return res as binary
    return decToBinary(res);
}

console.log(binaryPyramid(1, 4)) // 1111010