/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums){
    const len = nums.length;
    const answer = new Array(len).fill(1);

    //prefix
    let prefix = 1;
    for (let i = 0; i < len; i++){
        answer[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = len - 1; i >= 0; i--){
        answer[i] *= suffix;
        suffix *= nums[i]
    }
    return answer;
};
// var productExceptSelf = function(nums) {
//     let answer = [];
//     for (let i = 0; i < nums.length; i++){
//         let arrayWithoutSelf = nums.toSpliced(i, 1);
//         let result = productOfArray(arrayWithoutSelf);
//         answer.push(result);
//     }
//     return answer;
// };

// function productOfArray(nums){
//     sum = 1;
//     for (let num of nums){
//         sum *= num;
//     }
//     return sum;
// }