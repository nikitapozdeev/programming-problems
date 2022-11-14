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
  for (let i = 0; i < len; i++) {
    if (left === total - left - nums[i]) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};