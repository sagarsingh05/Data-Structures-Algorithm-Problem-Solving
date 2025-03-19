/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * https://leetcode.com/problems/remove-element/submissions/1579507523/
 */
var removeElement = function(nums, val) {
    var start =0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] != val){
            nums[start] = nums[i];
            start ++;
        }
    }
    return start;
};