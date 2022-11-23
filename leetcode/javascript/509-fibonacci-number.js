/**
 * https://leetcode.com/problems/fibonacci-number/
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) {
    return n;
  }
  
  let a = 1;
  let b = 1;
  
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  
  return b;
};