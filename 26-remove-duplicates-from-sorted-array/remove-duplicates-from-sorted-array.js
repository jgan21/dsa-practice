/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let [left, right] = [0, 1];
    let hold = 1;
    
    while (right < nums.length){
        if (nums[left] !== nums[right]){
            nums[hold] = nums[right];
            hold += 1; 
            left = right;
        }
        right += 1;
    }
    return hold;
};