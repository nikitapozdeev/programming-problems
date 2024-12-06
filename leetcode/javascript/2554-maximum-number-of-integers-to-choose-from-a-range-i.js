/**
 * https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i
 */

/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  const set = new Set(banned);
  let count = 0;
  let sum = 0;

  for (let i = 1; i <= n; ++i) {
    if (set.has(i)) continue;
    if ((sum + i) > maxSum) break;
    sum += i;
    count++;
  }

  return count;
};