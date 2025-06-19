/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * https://leetcode.com/problems/sort-colors/submissions/1669015757/
 */
var sortColors = function(nums) {
    let len = nums.length;
    let left = 0;
    let right = len-1;
    let i = 0;
    while(i <= right){
        if(nums[i]== 1){
            i++;
        }
        else if(nums[i]== 0){
            [nums[i], nums[left]] = [nums[left], nums[i]];
            i++;
            left++;
        }
        else{
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        }

    }
};