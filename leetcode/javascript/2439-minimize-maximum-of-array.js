/**
 * https://leetcode.com/problems/minimize-maximum-of-array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  let [min] = nums;
  let sum = min;
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    min = Math.max(min, Math.ceil(sum / (i + 1)));
  }
  return min;
};