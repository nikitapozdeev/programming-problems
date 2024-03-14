/**
 * https://leetcode.com/problems/binary-subarrays-with-sum.
 */

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  let count = 0;
  let left = 0;
  let sum = 0;
  let leadingZeroes = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while ((sum > goal || !nums[left]) && left < right) {
      if (nums[left] === 1) {
        leadingZeroes = 0;
      } else {
        leadingZeroes++;
      }

      sum -= nums[left];
      left++;
    }

    if (sum === goal) {
      count += 1 + leadingZeroes;
    }
  }

  return count;
};