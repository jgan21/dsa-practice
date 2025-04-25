/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let freqCounter = {};

    for (let char of s){
        freqCounter[char] = freqCounter[char] + 1|| 1;
    }

    for (let char of t){
        if(!freqCounter[char]) return false;
        freqCounter[char]--;
    }

    return true;
};