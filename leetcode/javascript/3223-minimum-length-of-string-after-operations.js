/**
 * https://leetcode.com/problems/minimum-length-of-string-after-operations
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  const counter = {};
  for (const char of s) {
    counter[char] = (counter[char] || 0) + 1;
  }

  let length = 0;
  for (const count of Object.values(counter)) {
    if (count % 2 === 0) {
      length += 2;
    } else {
      length += 1;
    }
  }

  return length;
};