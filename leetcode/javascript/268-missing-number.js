/**
 * https://leetcode.com/problems/missing-number
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let missed = nums.length;

  for (let i = 0; i < nums.length; i++) {
    missed ^= i ^ nums[i];  
  }

  return missed;
};