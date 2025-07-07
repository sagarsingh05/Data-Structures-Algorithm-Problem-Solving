import java.util.Arrays;
/**
 * https://leetcode.com/problems/house-robber/submissions/1688655803/
 */
class Solution {
    public int f(int[]nums, int i, int[] dp){
        if(i < 0) return 0;
        if(dp[i] != -1) return dp[i];

        int num1 = nums[i] + f(nums, i - 2, dp);
        int num2 = f(nums, i - 1, dp);

        dp[i] = Math.max(num1, num2);

        return dp[i];
    }
    public int rob(int[] nums) {
        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, -1);
        return f(nums, n - 1, dp);
    }
}