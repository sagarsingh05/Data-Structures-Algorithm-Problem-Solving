package Searching.SingleElementInASortedArray;
/**
 * https://leetcode.com/problems/single-element-in-a-sorted-array/submissions/1635407779/
 */
class Solution {
    public int singleNonDuplicate(int[] nums) {
        int lo = 0, hi = nums.length - 1;

        while(lo < hi){
            int mid = lo + (hi - lo) / 2;
            if(mid % 2 ==1){
                mid --;
            }
            if(nums[mid] != nums[mid + 1]){
                hi = mid;
            }
            else{
                lo = mid + 2;
            }
        }
        return nums[lo];
    }
}