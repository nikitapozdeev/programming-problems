/**
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  const map = {};
  let max = -1;

  for (const num of nums) {
    map[num] = true;
    if (map[-num]) {
      max = Math.max(max, Math.abs(num));
    }
  }

  return max;
};