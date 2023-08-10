/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = nums[mid];

    if (guess === target) {
      return true;
    }

    if (nums[low] < guess) {
      if (target < guess && target >= nums[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (nums[low] > guess) {
      if (target > guess && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      low++;
    }
  }

  return false; 
};