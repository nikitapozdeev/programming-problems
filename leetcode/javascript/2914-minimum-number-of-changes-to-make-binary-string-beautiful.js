/**
 * https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful
 */

/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
  let count = 0;
  for (let i = 0; i < s.length - 1; i += 2) {
    if (s[i] !== s[i + 1]) {
      count++;
    }
  }
  return count;
};