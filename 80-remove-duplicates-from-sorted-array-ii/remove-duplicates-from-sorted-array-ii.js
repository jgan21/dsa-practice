/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== nums[i+2]){
            nums[count] = nums[i];
            count += 1;
        }
    }
    return count;
};