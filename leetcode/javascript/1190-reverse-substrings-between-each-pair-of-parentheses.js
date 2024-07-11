/**
 * https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const stack = [];
  const chars = [];

  const reverse = (arr, start, end) => {
    while (start < end) {
      const tmp = arr[start];
      arr[start] = arr[end];
      arr[end] = tmp;
      start++;
      end--;
    }
  }

  for (const char of s) {
    if (char === '(') {
      stack.push(chars.length);
    } else if (char === ')') {
      const start = stack.pop();
      reverse(chars, start, chars.length);
    } else {
      chars.push(char);
    }
  }

  return chars.join('');
};