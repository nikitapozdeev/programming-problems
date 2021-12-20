/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let uniquePtr = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      uniquePtr++;
      nums[uniquePtr] = nums[i + 1];
    }
  }
  
  return uniquePtr + 1;
};