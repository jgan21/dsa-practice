/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let allocated = Array(ratings.length).fill(1);
    let sum = 0;

    for (let i = 1; i < ratings.length; i++){
        if (ratings[i] > ratings[i-1]){
            allocated[i] = allocated[i-1] + 1;
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--){
        if (ratings[i] > ratings[i+1]){
            allocated[i] = Math.max(allocated[i], allocated[i+1]+1);
        }
    }

    for (let num of allocated){
        sum += num;
    }

    return sum;
};