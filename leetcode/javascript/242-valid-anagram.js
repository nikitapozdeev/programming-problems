/**
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * Time: O(N + K)
 * Memory: O(N)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const frequency = {};
  for (const char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (const char of t) {
    if (!frequency[char]) {
      return false;
    }
    frequency[char]--;
  }

  return true;
};