/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/1629128989/
 */
function lowerBound(arr, x) {
    let n = arr.length;
    let lo = 0, hi = n-1;
    let ans = arr.length;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            ans = mid; 
            hi = mid - 1;
        }
    }
    return ans;
}
function upperBound(arr, x) {
    let n = arr.length;
    let lo = 0, hi = n-1;
    let ans = arr.length;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(arr[mid] <= x) {
            lo = mid + 1;
        } else {
            ans = mid; 
            hi = mid - 1;
        }
    }
    return ans;
}

var searchRange = function(nums, target) {
    let lb = lowerBound(nums, target);
    if(lb == nums.length || nums[lb] != target) {
        return [-1, -1];
    }
    let ub = upperBound(nums, target);
    return [lb, ub -1];
};