/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    k = k % len;
    
    function reverse(nums, start, end){
        while(start < end){
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    reverse(nums, 0, len - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, len - 1);
};