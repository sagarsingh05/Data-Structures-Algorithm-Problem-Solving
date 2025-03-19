/**
 * @param {number} n
 * @return {boolean}
 * https://leetcode.com/problems/power-of-two/submissions/1579523842/
 */
var isPowerOfTwo = function(n) {
    if(n==0) return false;
    if(n==1) return true;
    //odd
    if(n%2==1) return false;
    //even
    return isPowerOfTwo(n/2);
};