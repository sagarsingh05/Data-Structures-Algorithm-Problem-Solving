/**
 * @param {number} n
 * @return {number}
 * https://leetcode.com/problems/fibonacci-number/submissions/1579522550/
 */
var fib = function(n) {
    //base case
    if(n==0 || n== 1){
        return n;
    }

    //recursive case
    return fib(n-1) + fib(n-2);
};