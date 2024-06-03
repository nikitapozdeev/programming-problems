/**
 * https://leetcode.com/problems/append-characters-to-string-to-make-subsequence
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let right = 0;
  for (let left = 0; left < s.length && right < t.length; left++) {
    if (s[left] === t[right]) {
      right++;
    }
  }
  return t.length - right;
};