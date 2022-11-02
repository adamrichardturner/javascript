function nbDig(n, d) {
    /*
    Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

    Square all numbers k (0 <= k <= n) between 0 and n.

    Count the numbers of digits d used in the writing of all the k**2.

    Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
    */

    // Keep our squared numbers here
    const squared = [];
    // Our count of frequency of d in each squared number
    let count = 0;
    // For each number from 0 upto and including n...
    for(let i = 0; i <= n; i++) {
        // Push to squared the number squared
        squared.push(i ** 2);
    }
    // For each number in squared...
    squared.forEach(e => {
        // For each char in each number in squared...
        for(let i of String(e).split('')) {
            // If the char is equal to string representation of d increment count
            i === String(d) ? count++ : null;
        }
    });
    return count;
}

console.log(nbDig(25, 1)); // 11