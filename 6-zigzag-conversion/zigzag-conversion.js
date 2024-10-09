/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length){
        return s;
    }
    
    const rows = new Array(Math.min(numRows, s.length)).fill("");
    let currentRow = 0;
    let down = false;

    for (let char of s){
        rows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1){
            down = !down;
        }
        currentRow += down ? 1 : -1;
    }
    return rows.join("");
};