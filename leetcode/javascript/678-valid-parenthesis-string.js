/**
 * https://leetcode.com/problems/valid-parenthesis-string
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let opened = 0;
  let closed = 0;
  let len = s.length;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '*') {
      opened++;
    } else {
      opened--;
    }

    if (s[len - i - 1] === ')' || s[len - i - 1] === '*') {
      closed++;
    } else {
      closed--;
    }

    if (opened < 0 || closed < 0) {
      return false;
    }
  }

  return true;
};