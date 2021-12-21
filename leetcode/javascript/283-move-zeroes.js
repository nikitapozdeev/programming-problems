/**
 * https://leetcode.com/problems/move-zeroes/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let readPtr = 0;
  let nonZeroPtr = 0;
  
  while (readPtr < nums.length) {
    if (nums[readPtr] !== 0) {
      let buf = nums[nonZeroPtr];
      nums[nonZeroPtr] = nums[readPtr];
      nums[readPtr] = buf;
      nonZeroPtr++;
    }
    readPtr++;
  }
};