/**
 * https://leetcode.com/problems/backspace-string-compare/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const sChars = getChars(s);
  const tChars = getChars(t);
  if (sChars.length !== tChars.length) {
    return false;
  }
  
  for (let i = 0; i < sChars.length; i++) {
    if (sChars[i] !== tChars[i]) {
      return false;
    }
  }
  
  return true;
};
  
const getChars = (str) => {
  const chars = [];
  for (const char of str) {
    if (char !== '#') {
      chars.push(char);
    } else {
      chars.pop();
    }
  }
  return chars;
}