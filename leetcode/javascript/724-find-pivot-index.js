/**
 * https://leetcode.com/problems/find-pivot-index/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  const len = nums.length;
  if (len === 1) {
    return 0;
  }
  
  let total = 0;
  for (let i = 0; i < len; ++i) {
    total += nums[i];
  }
  
  let left = 0;
  let right = 0;
  for (let i = 0; i < len; i++) {
    left += (nums[i - 1] || 0);
    right = total - left - nums[i];
    if (left === right) {
      return i;
    }
  }
  return -1;
};