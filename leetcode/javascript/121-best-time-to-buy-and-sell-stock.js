/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = +Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {   
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    
    if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }  
  return profit;
};