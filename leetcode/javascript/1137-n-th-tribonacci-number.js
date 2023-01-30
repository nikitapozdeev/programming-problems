/**
 * https://leetcode.com/problems/n-th-tribonacci-number
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n < 2) {
    return n;
  }

  let a = 0;
  let b = 1;
  let c = 1;

  for (let i = 2; i < n; i++) {
    const d = a + b + c;
    a = b;
    b = c;
    c = d;
  }

  return c;
};