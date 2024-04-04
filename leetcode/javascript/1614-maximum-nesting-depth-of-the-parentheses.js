/**
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let max = 0;
  let level = 0;
  
  for (const char of s) {
    if (char === '(') {
      level++;
    } else if (char === ')') {
      max = Math.max(max, level);
      level--;
    }
  }
  
  return max;
};