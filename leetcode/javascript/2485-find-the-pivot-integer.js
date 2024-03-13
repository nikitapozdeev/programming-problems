/**
 * https://leetcode.com/problems/find-the-pivot-integer
 */

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  let total = Math.floor(n * (n + 1) / 2);
  let pivot = Math.floor(Math.sqrt(total));
  return (pivot ** 2) === total ? pivot : -1;
};