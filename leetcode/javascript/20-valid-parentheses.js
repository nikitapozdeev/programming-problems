/**
 * https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {  
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const stack = [];

  for (const char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
      const popped = stack.pop();
      if (map[popped] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};