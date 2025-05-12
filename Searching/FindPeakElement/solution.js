/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/find-peak-element/submissions/1631719472/
 */
var findPeakElement = function(nums) {
   if(nums.length == 1) return 0;
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);

        if(mid == 0 && nums[mid] > nums[mid+1]) return mid;

        if(mid == nums.length - 1 && nums[mid] > nums[mid-1]) return mid;

        if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) return mid;



      if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
        l = mid + 1;
      } else {
        if (mid === 0 || nums[mid] > nums[mid - 1]) return mid;
        r = mid - 1;
      }
    }
};