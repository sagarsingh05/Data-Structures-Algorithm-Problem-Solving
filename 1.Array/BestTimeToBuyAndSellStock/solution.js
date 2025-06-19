/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1668971580/
 */
var maxProfit = function(prices) {
    let ans = 0;
    let min_price = prices[0];

    for(let i = 0; i< prices.length; i++){
        let profit = prices[i] - min_price;
        ans = Math.max(ans, profit);
        min_price = Math.min(min_price, prices[i]);
    }
    return ans;
};