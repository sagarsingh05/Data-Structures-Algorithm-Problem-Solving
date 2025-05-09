package Searching.ArrangingCoin;
/**
 * https://leetcode.com/problems/arranging-coins/submissions/1629250644/
 */
class Solution {
    public int arrangeCoins(int n) {
      long lo = 1;
            long hi = n;
            long ans = 1;
            while (lo <= hi) {
                long mid = lo + (hi - lo) / 2;
                long value = (mid * (mid + 1)) / 2;
                if (value <= n) {
                    ans = mid;
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
            return (int) ans;
    }
}
