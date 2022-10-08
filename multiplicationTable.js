multiplicationTable = function(size) {
    /*
    Your task, is to create NxN multiplication table, of size provided in parameter.

    for example, when given size is 3:

    1 2 3
    2 4 6
    3 6 9
    for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
    */

    // Store in tables our multiplication tables
    const tables = [];
    // From 1 to size inclusive, iterate
    for(let i = 1; i <= size; i++) {
        // Push to tables an array length of size - fill with i
        tables.push(Array(size).fill(i).map((x, y) => {
            return x * (y+1);
        }));
    }
    return tables;
}

console.log(multiplicationTable(3)); // [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]