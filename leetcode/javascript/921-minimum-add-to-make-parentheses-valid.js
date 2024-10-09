/**
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid
 */

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let count = 0;
  let moves = 0;

  for (const char of s) {
    if (char === '(') {
      count++;
    } else {
      if (count > 0) {
        count--;
      } else {
        moves++;
      }
    }
  }

  return moves + count;
};