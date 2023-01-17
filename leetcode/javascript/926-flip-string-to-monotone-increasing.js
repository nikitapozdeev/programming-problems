/**
 * https://leetcode.com/problems/flip-string-to-monotone-increasing
 */

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let ans = 0;
  let num = 0;
  for (char of s) {
    if (char === '0') {
      ans = Math.min(num, ans + 1);
    } else {
      num++;
    }
  }
  return ans;
};