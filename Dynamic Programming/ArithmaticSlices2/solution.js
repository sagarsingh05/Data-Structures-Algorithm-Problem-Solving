/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/arithmetic-slices-ii-subsequence/submissions/1703892330/
 */
 let arr;
 let dp;
 function fbu(){
    let n = arr.length;
    let ans = 0;
    dp = Array(n);
    for(let k = 0; k < dp.length; k++){
        dp[k] = {};
    }

    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            let diff = arr[i] - arr[j];
            if(dp[j][diff]){
                ans += dp[j][diff]; 
                if(dp[i][diff]){
                    dp[i][diff] += 1 + dp[j][diff];
                }
                else{
                    dp[i][diff] = 1 + dp[j][diff];
                }
            }
            else{
                if(dp[i][diff]){
                    dp[i][diff] += 1;
                }
                else{
                    dp[i][diff] = 1;
                }
            }
        }
    }
    return ans;
 }
var numberOfArithmeticSlices = function(nums) {
    arr = nums;
    return fbu();
};