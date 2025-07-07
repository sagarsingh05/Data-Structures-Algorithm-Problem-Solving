/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/house-robber/submissions/1689759621/
 */
 function f(nums, i, dp){
    if(i < 0) return 0;
    if(dp[i] != -1) return dp[i];

    let num1 = nums[i] + f(nums, i - 2, dp);
    let num2 = f(nums, i - 1, dp);
    dp[i] = Math.max(num1, num2);

    return dp[i];
 }
var rob = function(nums) {
    let n = nums.length;
    let dp = Array(n).fill(-1);
    return f(nums, n - 1, dp);
};