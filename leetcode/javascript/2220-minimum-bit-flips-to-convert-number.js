/**
 * https://leetcode.com/problems/minimum-bit-flips-to-convert-number
 */

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
  let xor = start ^ goal;
  let count = 0;

  while (xor) {
    count += xor & 1;
    xor >>= 1;
  }

  return count;
};
