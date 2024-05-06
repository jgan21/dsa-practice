/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let endInd = m + n - 1;
    let l = m - 1;
    let r = n - 1;
    while (r >= 0){
        if (l >=0 && nums1[l] > nums2[r]){
            nums1[endInd] = nums1[l];
            endInd -= 1;
            l -= 1;
        } else {
            nums1[endInd] = nums2[r];
            endInd -= 1;
            r -= 1;
        }
    }

};