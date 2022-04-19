/**
 * https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {  
  const stack = [];
  const map = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
        stack.push(s[i]);
      } else {
        const popped = stack.pop();
        if (s[i] !== map[popped]) {
          return false;
        }
      }
  }
  
  return stack.length === 0;
};