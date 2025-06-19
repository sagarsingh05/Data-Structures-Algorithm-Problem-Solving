/**
 * https://leetcode.com/problems/sort-colors/submissions/1669013615/
 */
class SortColors {
    public void sortColors(int[] nums) {
        int n = nums.length;
        int left = 0;
        int right = n - 1;
        int i = 0;
        while (i <= right) {
            int temp=0;
            if (nums[i] == 1) {
                i++;
            } else if (nums[i] == 0) {
                temp = nums[i];
                nums[i] = nums[left];
                nums[left] = temp;
                i++;
                left++;
            }
            else{ 
                temp = nums[i];
                nums[i] = nums[right];
                nums[right] = temp;
                right--;
            }
        }
    }
 }