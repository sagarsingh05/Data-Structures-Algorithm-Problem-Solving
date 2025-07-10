/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/longest-increasing-subsequence/submissions/1693426621/
 */
 let dp;
 let arr;
 function f(i){
    if(i == 0) return 1;
    if(dp[i] != -1) return dp[i];
    let result = 1;

    for(let j = 0; j <= i -1; j++){
        if(arr[j] < arr[i]){
            result = Math.max(result, 1 + f(j));
        }
    }
    return dp[i] = result;
 }
var lengthOfLIS = function(nums) {
    arr = nums;
    dp = Array(2505).fill(-1);
    let ans = Number.MIN_VALUE;
    for(let i = 0; i < nums.length; i++){
        ans = Math.max(ans, f(i));
    }
    return ans;
};