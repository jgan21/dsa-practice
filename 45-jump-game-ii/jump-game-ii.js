/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let currentEnd = 0;
    let jump = 0;
    let farthest = 0;

    for (let i=0; i < nums.length - 1; i++){
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currentEnd){
            jump++;
            currentEnd = farthest;
        }

    }

    return jump;


};

var canJump = function(nums) {
    let reachable = 0;

    for(let i = 0; i < nums.length; i++){
        if (i > reachable)return false;
        if (i + nums[i] > reachable) {
            reachable = i + nums[i]
        }
    }
    return true;
};