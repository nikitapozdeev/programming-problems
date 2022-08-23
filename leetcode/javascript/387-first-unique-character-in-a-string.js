/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = map[char] ? map[char] + 1 : 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  
  return -1;
};