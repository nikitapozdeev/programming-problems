/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = nums[mid];

    if (guess === target) {
      return mid;
    }

    if (nums[low] <= guess) {
      if (target > guess || target < nums[low]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (target < guess || target > nums[high]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1; 
};