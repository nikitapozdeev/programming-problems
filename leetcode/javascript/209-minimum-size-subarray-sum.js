/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let left = 0;
  let count = +Infinity;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      count = Math.min(count, right + 1 - left);
      sum -= nums[left++];
    }
  }
  return count === +Infinity ? 0 : count;
};