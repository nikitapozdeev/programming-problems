/**
 * https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
  let left = 0;
  let sum = 0;
  let max = 0;
  const set = new Set();

  for (let right = 0; right < nums.length; right++) {
    while ((right - left + 1) > k || set.has(nums[right])) {
      set.delete(nums[left]);
      sum -= nums[left];
      left++; 
    }

    sum += nums[right];
    set.add(nums[right]);

    if (set.size === k) {
      max = Math.max(max, sum);
    }
  }

  return max;
};