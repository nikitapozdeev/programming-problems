/**
 * https://leetcode.com/problems/first-missing-positive/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] = 0;
    }
  }

  for (let num of nums) {
    index = Math.abs(num) - 1;
    if (index < 0 || index >= nums.length) {
      continue;
    }

    if (nums[index] > 0) {
      nums[index] *= -1;
    } else if (nums[index] === 0) {
      nums[index] = -(nums.length + 1);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] >= 0) {
      return i;
    }
  }

  return nums.length + 1;
};