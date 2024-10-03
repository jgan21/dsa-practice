/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let hIndex = 0;
    let sorted = citations.sort((a,b) => b - a);
    for (let i = 0; i < sorted.length; i++){
        if ( i + 1 <= sorted[i]){
            hIndex = i + 1;
        } else {
            break;
        }
    }
    return hIndex;
};