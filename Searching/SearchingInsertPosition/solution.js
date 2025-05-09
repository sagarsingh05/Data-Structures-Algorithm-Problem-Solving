/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode.com/problems/search-insert-position/submissions/1629211350/
 */
function lowerBound (arr, x){
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let ans = arr.length;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        if(arr[mid] < x){
            low = mid + 1;
        }
        else{
            ans = mid;
            high = mid - 1;
        }
    }
    return ans;
}
var searchInsert = function(nums, target) {
    return lowerBound(nums, target);
};