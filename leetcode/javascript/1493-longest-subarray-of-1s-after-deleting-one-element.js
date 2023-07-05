/**
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  if (nums.length === 1) {
    return 0;
  }

  let count = 0;
  let prevCount = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      max = Math.max(max, count + prevCount);
      prevCount = count;
      count = 0;
    } else {
      count++;
    }
  }

  max = Math.max(max, count + prevCount);

  if (max === nums.length) {
    return max - 1;
  }

  return max;
};