/**
 * https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
  const frequencies = {};
  let max = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    frequencies[nums[right]] = (frequencies[nums[right]] || 0) + 1;
    while (frequencies[nums[right]] > k) {
      frequencies[nums[left]]--;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
};