/**
 * https://leetcode.com/problems/perfect-squares/submissions/1686005227/
 */
import java.util.Arrays;
class Solution {
    public static int[] sqrtValue;
    public static int[] dp;

    public static int f(int num){
        if(num == 0){
            return 0;
        }
        if(num < 0){
            return Integer.MAX_VALUE;
        }
        if(dp[num] != -1){
            return dp[num];
        }
        int ans = Integer.MAX_VALUE;
        int n = sqrtValue.length;

        for(int i = 0; i < n; i++){
            if(num >= sqrtValue[i]){
                ans = Math.min(ans, f(num - sqrtValue[i]));
            }
            else{
                break;
            }
        }
        if(ans == Integer.MAX_VALUE){
            return dp[num] = Integer.MAX_VALUE;
        }
        return dp[num] = 1 + ans;
    }
    public int numSquares(int n) {
        sqrtValue = new int[100];
        int j = 0;
        for(int i = 1; i*i <= 10000; i++){
            sqrtValue[j] = i * i;
            j++; 
        }
        dp = new int[10005];
        Arrays.fill(dp, -1);
        return f(n);
    }
}