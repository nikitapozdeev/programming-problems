/**
 * https://leetcode.com/problems/patching-array
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let num = 1;
  let patches = 0;
  let i = 0;

  while (num <= n) {
    if (i < nums.length && nums[i] <= num) {
      num += nums[i];
      i++;
    } else {
      num *= 2;
      patches++;
    }
  }

  return patches;
};