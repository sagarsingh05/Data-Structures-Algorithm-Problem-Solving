/**
 * https://leetcode.com/problems/split-array-largest-sum/submissions/1682294736/
 */
class Solution {
    public boolean canMidSplitKthSubarrays (int[] nums, int k, int mid){
        int count = 0;
        int ts = 0;
        for(int num : nums){
            if(ts + num > mid){
                count ++;
                ts = 0;
            }
            ts += num;
        }
        count ++;
        return count <= k;
    }
    public int splitArray(int[] nums, int k) {
       int totalSum = 0;
       int maxNum = -1;

       for(int num : nums){
        totalSum += num;
        maxNum = Math.max(maxNum, num);
       }

       int lo = maxNum;
       int hi = totalSum;
       int ans = hi;
       while(lo <= hi){
            int mid = lo + (hi - lo) / 2;
            if(canMidSplitKthSubarrays(nums, k, mid)){
                ans = mid;
                hi = mid - 1;
            }
            else{
                lo = mid + 1;
            }
       }
       return ans;
    }
}