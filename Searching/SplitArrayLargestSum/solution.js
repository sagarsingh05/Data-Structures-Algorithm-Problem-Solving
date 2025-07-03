/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/split-array-largest-sum/submissions/1682318588/
 */
 function canMidSplitIntoKNumberOfSubArrays(nums, k, mid){
    let ts = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if(ts + nums[i] > mid){
            count ++;
            ts = 0;
        }
        ts += nums[i];
    }
    count ++;
    return count <= k;
}

var splitArray = function(nums, k) {
    let totalSum = 0;
    let maxNum = -1;

    for(let i  = 0; i < nums.length; i++){
        totalSum += nums[i];
        maxNum = Math.max(maxNum, nums[i]);
    }

    let lo = maxNum;
    let hi = totalSum;
    let ans = 0;

    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo) / 2);
        if(canMidSplitIntoKNumberOfSubArrays(nums, k, mid)){
            ans = mid;
            hi = mid - 1;
        }
        else{
            lo = mid + 1;
        }
    }
    return ans;
};