/**
 * https://leetcode.com/problems/maximum-subarray
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let tmpSum = 0;

  for (const num of nums) {
    if (tmpSum < 0) {
      tmpSum = 0;
    }

    tmpSum += num;
    maxSum = Math.max(maxSum, tmpSum);
  }

  return maxSum;
};