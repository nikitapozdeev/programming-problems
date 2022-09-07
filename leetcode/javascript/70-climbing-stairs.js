/**
 * https://leetcode.com/problems/climbing-stairs/ 
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let one = 1;
  let two = 1;
  for (let i = 0; i < n - 1; i++) {
    const buf = two;
    two = one + two;
    one = buf;
  }
  return two;
};