/**
 * @param {number[][]} triangle
 * @return {number}
 * https://leetcode.com/problems/triangle/submissions/1691594799/
 */
 let dp;
 let mat;
 function f(row, col){
    if(row == mat.length - 1){
        return mat[row][col];
    }
    if(dp[row][col] != -1) return dp[row][col];

    return dp[row][col] = mat[row][col] + Math.min(f(row + 1, col), f(row + 1, col + 1));
 }
var minimumTotal = function(triangle) {
    mat = triangle;
    dp = Array(205);
    for(let i = 0; i < 205; i++){
        dp[i] = Array(205).fill(-1);
    }
    return f(0,0);
};