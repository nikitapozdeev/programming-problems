/**
 * https://leetcode.com/problems/buddy-strings
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    const chars = {};
    for (const char of s) {
      chars[char] = (chars[char] || 0) + 1;
      if (chars[char] === 2) {
        return true;
      }

    }
    return false;
  }

  let first = null;
  let second = null;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (first === null) {
        first = i;
      } else if (second === null) {
        second = i;
      } else {
        return false;
      }
    }
  }

  if (second === null) {
    return false;
  }

  return s[first] === goal[second] && s[second] === goal[first];
};