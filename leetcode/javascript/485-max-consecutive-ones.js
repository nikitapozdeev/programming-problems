/**
 * https://leetcode.com/problems/max-consecutive-ones/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  let totalMax = 0;
  let windowMax = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      windowMax++;
    } else if (nums[i] === 0) {
      windowMax = 0;
    }
    totalMax = Math.max(totalMax, windowMax);
  }
  
  return totalMax;
};