/**
 * https://leetcode.com/problems/grumpy-bookstore-owner/
 */

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  let sum = 0;
  for (let i = 0; i < minutes; ++i) {
    sum += customers[i] * grumpy[i];
  }

  let max = sum;
  for (let i = minutes; i < customers.length; ++i) {
    sum += customers[i] * grumpy[i];
    sum -= customers[i - minutes] * grumpy[i - minutes];
    max = Math.max(max, sum);
  }

  let total = max;
  for (let i = 0; i < customers.length; ++i) {
    if (!grumpy[i]) {
      total += customers[i];
    }
  }

  return total;
};