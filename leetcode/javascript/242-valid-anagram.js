/**
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  const map = {};
  for (const char of t) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }
  
  for (const char of s) {
    if (map[char] > 0) {
      map[char]--;
    } else {
      return false;
    }
  }
  return true;
};