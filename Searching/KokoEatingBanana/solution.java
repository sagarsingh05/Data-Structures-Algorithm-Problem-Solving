import java.util.Arrays;
/**
 * https://leetcode.com/problems/koko-eating-bananas/submissions/1691154708/
 */
class Solution {

    public boolean canEatAllBananasInMidSpeed(int[] piles, int h, int mid) {
        int totalHoursByKoko = 0;
        for (int i = 0; i < piles.length; i++) {
            totalHoursByKoko += (piles[i] + mid - 1) / mid;
            if (totalHoursByKoko > h) return false;
        }
        return totalHoursByKoko <= h;
    }

    public int minEatingSpeed(int[] piles, int h) {
        int lo = 1;
        int hi = Arrays.stream(piles).max().getAsInt();
        int ans = hi;

        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;

            if (canEatAllBananasInMidSpeed(piles, h, mid)) {
                ans = mid;
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }

        return ans;
    }
}
