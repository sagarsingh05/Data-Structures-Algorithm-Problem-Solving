/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * https://leetcode.com/problems/coin-change/submissions/1697622938/
 */
 let c;
 let dp;
 function f(amount){
    if(amount < 0) return Number.MAX_VALUE;
    if(amount == 0) return 0;
    if(dp[amount] != -1) return dp[amount];
    let ans = Number.MAX_VALUE;
    let n = c.length;

    for(let i = 0; i < n ; i++){
        if(amount >= c[i]){
            ans = Math.min(ans, f(amount - c[i]));
        }
    }
        if(ans == Number.MAX_VALUE){
            return dp[amount] = Number.MAX_VALUE;
        }
    return dp[amount] = 1 + ans;
 }
var coinChange = function(coins, amount) {
    c = coins;
    dp = new Array(10005).fill(-1);
    let ans = f(amount);
    return (ans == Number.MAX_VALUE) ? -1 : ans;
};