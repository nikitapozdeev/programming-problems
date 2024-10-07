/**
 * https://leetcode.com/problems/minimum-string-length-after-removing-substrings
 */

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  const stack = [];
  
  for (const char of s) {
    if (!stack.length) {
      stack.push(char);
      continue;
    }

    if ((char === 'B' && stack[stack.length - 1] === 'A') || (
        char === 'D' && stack[stack.length - 1] === 'C')) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length;
};