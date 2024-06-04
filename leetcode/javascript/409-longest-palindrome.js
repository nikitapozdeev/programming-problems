/**
 * https://leetcode.com/problems/longest-palindrome/
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let length = 0;
  const seen = new Map();

  for (const char of s) {
    if (seen.has(char)) {
      seen.delete(char);
      length += 2;
    } else {
      seen.set(char);
    }
  }

  if (seen.size) {
    length++;
  }

  return length;
};