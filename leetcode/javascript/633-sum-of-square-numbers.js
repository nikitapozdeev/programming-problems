/**
 * https://leetcode.com/problems/sum-of-square-numbers
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  for (let a = 0; a * a <= c; ++a) {
    const b = Math.sqrt(c - (a * a));
    if (Number.isInteger(b)) {
      return true;
    }
  }

  return false;
};