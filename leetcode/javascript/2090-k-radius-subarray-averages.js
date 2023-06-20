/**
 * https://leetcode.com/problems/k-radius-subarray-averages
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  const windowSize = k * 2 + 1;
  const averages = [];
  let sum = 0;
  let left = 0;

  for (let i = 0; i < nums.length && i < windowSize - 1; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < k && i < nums.length; i++) {
    averages.push(-1);
  }

  for (let i = windowSize - 1; i < nums.length; i++) {
    sum += nums[i];
    averages.push(Math.floor(sum / windowSize));
    sum -= nums[left++];

  }

  for (let i = averages.length; i < nums.length; i++) {
    averages.push(-1);
  }

  return averages;
};