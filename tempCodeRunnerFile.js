function removeUrlAnchor(url) {
    /*
    Complete the function/method so that it returns the url with anything after the anchor (#) removed.

    Examples
    "www.codewars.com#about" --> "www.codewars.com"
    "www.codewars.com?page=1" -->"www.codewars.com?page=1"
    */

    // If the anchor exists, return url sliced up to but not including anchor
    // else just return url
    return url.indexOf('#') > -1 ? url.slice(0, url.indexOf('#')) : url;
}

console.log(removeUrlAnchor("www.codewars.com#about")); // www.codewars.com
console.log(removeUrlAnchor("www.codewars.com?page=1")); // www.codewars.com?page=1
console.log(removeUrlAnchor('www.codewars.com/katas/')); // www.codewars.com/katas/