/**
 * https://leetcode.com/problems/maximum-ice-cream-bars
 */

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);
  let iceCreams = 0;
  for (const cost of costs) {
    if (coins >= cost) {
      iceCreams++;
      coins -= cost;
    }
  }
  return iceCreams;
};