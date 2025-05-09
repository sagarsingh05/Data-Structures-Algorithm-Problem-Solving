/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * https://leetcode.com/problems/search-a-2d-matrix/submissions/1629152290/
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let lo = 0;
    let hi = m*n -1;

    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        if(matrix[row][col] == target){
            return true;
        }
        else if(matrix[row][col] < target){
            lo = mid + 1;
        }
        else{
            hi = mid - 1;
        }
    }
    return false;
};