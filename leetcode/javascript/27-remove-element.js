/**
 * https://leetcode.com/problems/remove-element/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let low = 0;
  let high = nums.length;
  while (low < high) {
    if (nums[low] === val) {
      if (nums[high - 1] !== val) {
        nums[low] = nums[high - 1];
      }
      high--;
    } else {
      low++;
    }
  }

  return high;
};