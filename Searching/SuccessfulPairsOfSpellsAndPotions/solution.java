/**
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/submissions/1635343644/
 */
package Searching.SuccessfulPairsOfSpellsAndPotions;
import java.util.Arrays;
class Solution {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        Arrays.sort(potions);
        int n = spells.length;
        int m = potions.length;
        int[] res = new int[n];

        for(int i = 0; i < n ; i++){
            int spell = spells[i];
            int index = lowerBound(spell, potions, success);
            res[i] = m - index;
        }
        return res;
    }

    public static int lowerBound(int spell, int[] potions, long success){
        int n = potions.length;
        int low = 0;
        int high = n - 1;
        int ans = n;

        while(low <= high){
            int mid = low + (high - low) / 2;
            if((long) spell * (long) potions[mid] >= success){
                ans = mid;
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }
        }
        return ans;
    }
}