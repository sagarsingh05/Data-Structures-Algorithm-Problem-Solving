/**
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/submissions/1666762815/
 */
class Solution {
    public int shipWithinDays(int[] weights, int days) {
        int totalWeights = 0;
        int maxWeight = -1;

        for(int weight : weights){
            totalWeights += weight;
            maxWeight = Math.max(maxWeight, weight);
        }

        int lo = maxWeight;
        int hi = totalWeights;
        int ans = hi;
        while( lo <= hi){
            int mid = lo + (hi - lo) / 2;

            if(canShipWithMidWeightWithinDDays(weights, mid, days)){
                ans = mid;
                hi = mid - 1;
            }
            else{
                lo = mid + 1;
            }
        }
        return ans;
    }

    private boolean canShipWithMidWeightWithinDDays (int[] weights, int mid, int days){
        int daysCount = 0;
        int tw = 0;

        for(int weight : weights){
            if(tw + weight > mid){
                daysCount ++;
                tw = 0;
            }
            tw += weight;
        }
        daysCount ++;
        return daysCount <= days;
    }
}