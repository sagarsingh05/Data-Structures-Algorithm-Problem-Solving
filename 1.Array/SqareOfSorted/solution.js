/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/squares-of-a-sorted-array/submissions/1579495391/
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let result = Array(n);
    let left = 0 , right = n-1;
    for(let i = n-1; i>=0; i--){
        if(nums[left]**2 < nums[right]**2){
            result[i] = nums[right]**2;
            right--;
        } else{
            result[i]= nums[left]**2;
            left++;
        }
    }
    return result;
};