/**
 * https://leetcode.com/problems/build-array-from-permutation/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  const len = nums.length;
  const mask = 0b1111111111;

  for (let i = 0; i < len; i++) {
    let num = nums[nums[i]] & mask;
    nums[i] = (num << 10) | nums[i];
  }
  
  for (let i = 0; i < len; i++) {
    nums[i] >>= 10;
  }
  
  return nums;
};