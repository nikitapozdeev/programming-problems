/**
 * https://leetcode.com/problems/remove-k-digits
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const stack = [];

  for (const n of num) {
    while (stack.length && stack[stack.length - 1] > n && k > 0) {
      stack.pop();
      k--;
    }

    stack.push(n);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  return BigInt(stack.join('')).toString();
};