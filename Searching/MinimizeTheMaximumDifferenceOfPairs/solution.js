/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 * https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/submissions/1666853933/
 */

 function canFormatAtleastPPairsAtMostWithMidDiff(nums, mid, p){
    let count = 0;
    let i = 0;

    while(i < nums.length - 1){
        if(nums[i + 1] - nums[i] <= mid){
            count ++;
            i+= 2;
        }
        else{
            i++;
        }
    }
    return count >=p;
 }
var minimizeMax = function(nums, p) {
    nums.sort((a,b) => a - b);
    let n = nums.length;
    let lo = 0, hi = nums[n-1] - nums[0];
    let ans = hi;

    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo) / 2);
        if(canFormatAtleastPPairsAtMostWithMidDiff(nums, mid, p)){
            ans = mid;
            hi = mid - 1;
        }
        else{
            lo = mid + 1;
        }
    }
    return ans;
};