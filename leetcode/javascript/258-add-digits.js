/**
 * https://leetcode.com/problems/add-digits
 */

/**
 * Straightforward solutions
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    sum += digit;

    if (num === 0 && sum > 9) {
      num = sum;
      sum = 0;
    }
  }

  return sum;
};

/**
 * Constant time solution.
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return num === 0 ? 0 : ((num - 1) % 9) + 1;
};