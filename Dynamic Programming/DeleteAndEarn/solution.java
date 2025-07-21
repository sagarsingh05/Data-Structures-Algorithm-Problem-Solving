import java.util.Arrays;
/**
 * https://leetcode.com/problems/delete-and-earn/submissions/1695501044/
 */
class Solution {
    public int f(int[] points, int i, int[] dp) {
        if (i < 0) return 0;
        if (dp[i] != -1) return dp[i];

        int pick = points[i] + f(points, i - 2, dp);
        int skip = f(points, i - 1, dp);

        return dp[i] = Math.max(pick, skip);
    }

    public int deleteAndEarn(int[] nums) {
        int maxVal = 0;
        for (int num : nums) {
            maxVal = Math.max(maxVal, num);
        }

        int[] points = new int[maxVal + 1];
        for (int num : nums) {
            points[num] += num;
        }

        int[] dp = new int[maxVal + 1];
        Arrays.fill(dp, -1);

        return f(points, maxVal, dp);
    }
}
