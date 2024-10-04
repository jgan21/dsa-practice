/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ").filter(word => word.length > 0).reverse();
    return words.join(" ");
};