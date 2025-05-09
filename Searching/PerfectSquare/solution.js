/**
 * @param {number} num
 * @return {boolean}
 * https://leetcode.com/problems/valid-perfect-square/submissions/1629263962/
 */
var isPerfectSquare = function(num) {
    let lo = 1;
    let hi = num;

    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo) / 2);
        if(mid * mid == num){
            return mid;
        }
        else if(mid * mid < num){
            lo = mid + 1;
        }
        else{
            hi = mid - 1;
        }
    }
    return false;
};