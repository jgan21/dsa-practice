/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbolMap = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }

    let sum = 0; 

    for (let i = 0; i < s.length; i++){
        if (symbolMap[s[i+1]] > symbolMap[s[i]]){
            sum += symbolMap[s[i+1]] - symbolMap[s[i]];
            i += 1;
        } else {
            sum += symbolMap[s[i]];
        }
    }
    return sum;
};