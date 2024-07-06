/**
 * https://leetcode.com/problems/pass-the-pillow
 */

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  const full = Math.floor(time / (n - 1));
  const remainder = time % (n - 1)
  if (full % 2 === 0) {
    return remainder + 1;
  } else {
    return n - remainder;
  }
};