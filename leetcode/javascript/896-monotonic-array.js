/**
 * https://leetcode.com/problems/monotonic-array/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
  let isGrowing;
  for (let i = 0; i < nums.length - 1; ++i) {
    if (typeof isGrowing === 'undefined') {
      if (nums[i] < nums[i + 1]) {
        isGrowing = true;
      } else if (nums[i] > nums[i + 1]) {
        isGrowing = false;
      }
    } else {
      if (isGrowing) {
        if (nums[i] > nums[i + 1]) {
          return false;
        }
      } else {
        if (nums[i] < nums[i + 1]) {
          return false;
        }
      }   
    }
  }
  
  return true;
};