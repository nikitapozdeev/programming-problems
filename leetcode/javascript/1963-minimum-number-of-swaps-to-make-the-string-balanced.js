/**
 * https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced
 */

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  let count = 0;
  
  for (const char of s) {
    if (char === '[') {
      count++;
    } else {
      count -= Number(count > 0);
    }
  }

  return Math.ceil(count / 2);
};