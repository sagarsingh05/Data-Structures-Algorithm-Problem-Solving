/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/single-element-in-a-sorted-array/submissions/1635404898/
 */
var singleNonDuplicate = function(nums) {
    let lo = 0;
    let hi = nums.length - 1;

    while(lo < hi){
        let mid = lo + Math.floor((hi - lo) / 2);

        if(mid % 2 === 1){
            mid --;
        }

        if(nums[mid] !== nums[mid + 1]){
            hi = mid;
        }
        else{
            lo = mid + 2;
        }
    }
    return nums[lo];
};