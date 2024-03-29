/**
 * https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const max = nums.reduce((max, curr) => Math.max(max, curr));
  let result = 0;
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === max) {
      count++;
    }

 
    while (count === k) {
      if (nums[left] === max) {
        count--;
      }
      left++;
    }

    result += left;
  }

  return result;
};