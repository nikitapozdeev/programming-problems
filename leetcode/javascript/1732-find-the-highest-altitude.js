/**
 * https://leetcode.com/problems/find-the-highest-altitude
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let attitude = 0;
  let max = 0;
  for (const at of gain) {
    attitude += at;
    max = Math.max(max, attitude);
  }

  return max;
};