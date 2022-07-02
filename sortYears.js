const sortYears = arr => {
    /* 
    Returns a new array with the elements sorted in desecending order.
    */
    return arr.sort().reverse();
}

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))