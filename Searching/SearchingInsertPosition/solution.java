package Searching.SearchingInsertPosition;
/**
 * https://leetcode.com/problems/search-insert-position/submissions/1629210060/
 */
class Solution {
    public static int LowerBound(int[] arr, int x){
        int n = arr.length;
        int low = 0, high = n - 1;
        int ans = n;

        while(low <= high){
            int mid = low + (high - low)/2;

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
    public int searchInsert(int[] nums, int target) {
        return LowerBound(nums, target);
    }
}