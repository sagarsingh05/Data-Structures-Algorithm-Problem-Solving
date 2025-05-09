/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 * https://leetcode.com/problems/guess-number-higher-or-lower/submissions/1629223873/
 */
var guessNumber = function(n) {
    let lo = 1, hi = n;
     while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);

        if(guess(mid) ==0) return mid;
        else if(guess(mid) == -1) hi = mid - 1;
        else lo = mid + 1;
     }
};