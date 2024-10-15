/**
 * https://leetcode.com/problems/separate-black-and-white-balls
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
  let left = 0;
  let swaps = 0;

  for (let right = left; right < s.length; ++right) {
    if (s[right] === '0') {
      swaps += right - left;
      left++;
    }
  }

  return swaps;
};