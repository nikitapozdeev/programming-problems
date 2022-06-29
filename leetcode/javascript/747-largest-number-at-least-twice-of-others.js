/**
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
  const len = nums.length;
  if (len === 1) {
    return 0;
  }
  
  let largest = nums[0];
  let largestIndex = 0;
  for (let i = 1; i < len; ++i) {
    if (nums[i] > largest) {
      largest = nums[i];
      largestIndex = i;
    }
  }
  
  for (let i = 0; i < len; ++i) {
    if (largestIndex === i) {
      continue;
    }
    
    if (largest < nums[i] * 2) {
      return -1;
    }
  }
  
  return largestIndex;
};