/**
 * https://leetcode.com/problems/remove-element/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let addPtr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[addPtr++] = nums[i];
    }
  }
  return addPtr;
};