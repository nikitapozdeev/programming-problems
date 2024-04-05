/**
 * https://leetcode.com/problems/make-the-string-great
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  const stack = [];
  for (const char of s) {
    if (stack.length && stack[stack.length - 1].toLowerCase() === char.toLowerCase() && stack[stack.length - 1] !== char) {
      stack.pop();
    } else {
      stack.push(char)
    }
  }

  return stack.join('');
};