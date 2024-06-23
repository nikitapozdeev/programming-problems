/**
 * https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit
 */

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  const minQueue = [];
  const maxQueue = [];
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < nums.length; ++right) {
    while (minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
      minQueue.pop();
    }

    while (maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
      maxQueue.pop();
    }

    minQueue.push(nums[right]);
    maxQueue.push(nums[right]);

    while (Math.abs(maxQueue[0] - minQueue[0]) > limit) {
      if (minQueue[0] === nums[left]) {
        minQueue.shift();
      }

      if (maxQueue[0] === nums[left]) {
        maxQueue.shift();
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};