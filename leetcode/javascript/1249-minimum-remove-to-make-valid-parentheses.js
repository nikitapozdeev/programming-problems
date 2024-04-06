/**
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses
 */

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let balance = 0;
  const stack = [];
  const output = [];

  for (const char of s) {
    if (char === '(') {
      balance++;
    } else if (char === ')') {
      if (balance > 0) {
        balance--;    
      } else {
        continue;
      }
    }
    
    stack.push(char);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    const char = stack.pop();
    if (char === '(' && balance > 0) {
      balance--;
      continue;
    }

    output.push(char);
  }

  return output.reverse().join('');
};