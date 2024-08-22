/**
 * https://leetcode.com/problems/number-complement
 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  const mask = (1 << num.toString(2).length) - 1;
  return num ^ mask;
};