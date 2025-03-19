/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1579499472/
 */
var removeDuplicates = function(nums) {
    var start = 0;
    for(let i = 1; i<nums.length; i++){
        if(nums[i] != nums[start]){
            start++;
            nums[start]= nums[i];
        }
    }
    return start+1;
};