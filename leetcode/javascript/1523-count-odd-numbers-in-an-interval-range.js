/**
 * https://leetcode.com/problems/count-odd-numbers-in-an-interval-range
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  return (high - low + 1 + low % 2) >> 1;
};