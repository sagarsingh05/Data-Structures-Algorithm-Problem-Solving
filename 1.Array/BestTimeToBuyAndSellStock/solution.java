/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1668986235/
 */
class Solution {
    public int maxProfit(int[] prices) {
       int ans = 0;
       int minPrice = prices[0];

       for(int i = 0; i < prices.length; i++){
        int profit = prices[i] - minPrice;
        ans = Math.max(ans, profit);
        minPrice = Math.min(minPrice, prices[i]);
       }
       return ans;
    }
}