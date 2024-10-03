/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftTallest = 0;
    let rightTallest = 0;
    let water = 0;

    while (left < right){
        if (height[left] < height[right]){
            if (height[left] >= leftTallest){
                leftTallest = height[left];
            }else {
                water += leftTallest - height[left];
            }
            left++;
        }else {
            if (height[right] >= rightTallest){
                rightTallest = height[right];
            }else {
                water += rightTallest - height[right];
            }
            right--;
        }
    }
    return water;
 
};