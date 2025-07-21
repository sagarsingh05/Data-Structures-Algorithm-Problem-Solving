/**
 * @param {number} n
 * @return {number}
 * https://leetcode.com/problems/perfect-squares/submissions/1699073742/
 */
 let dp;
 let sqrtVal;
 function f(num){
    if(num == 0) return 0;
    if(num < 0) return Number.MAX_VALUE;
    if(dp[num] != -1) return dp[num];
    let ans = Number.MAX_VALUE;
    let n = sqrtVal.length;
    
    for(let i = 0; i < n; i++){
        if(num >= sqrtVal[i]){
            ans = Math.min(ans, f(num - sqrtVal[i]));
        }
        else{
            break;
        }
    }
    if(ans == Number.MAX_VALUE){
        return dp[num] = Number.MAX_VALUE;
    }
    return dp[num] = 1 + ans;
 }
var numSquares = function(n) {
    sqrtVal = new Array(100);
    let j = 0;
    for(let i = 1; i * i <= 10000; i++){
        sqrtVal[j] = i * i;
        j++;
    }
    dp = new Array(10005).fill(-1);
    return f(n);
};