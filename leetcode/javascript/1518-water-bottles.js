/**
 * https://leetcode.com/problems/water-bottles/
 */

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let drinks = 0;

  while (numBottles >= numExchange) {
    const count = Math.trunc(numBottles / numExchange)
    drinks += numExchange * count;
    numBottles -= numExchange * count;
    numBottles += count;
  }

  return drinks + numBottles;
};