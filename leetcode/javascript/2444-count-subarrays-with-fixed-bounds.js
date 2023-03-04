/**
 * https://leetcode.com/problems/count-subarrays-with-fixed-bounds
 */

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  let left = -1;
  let min = -1;
  let max = -1;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] < minK || nums[right] > maxK) {
      left = right;
    } else {
        if (nums[right] === minK) {
          min = right;
        }

        if (nums[right] === maxK) {
          max = right;
        }
    }



    const smallest = Math.min(min, max) - left;
    if (smallest > 0) {
      count += smallest;
    }
  }

  return count;
};