/**
 * https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
  if (nums.length <= 4) {
    return 0;
  }

  nums.sort((a, b) => a - b);
  let min = +Infinity;
  
  for (let left = 0; left < 4; ++left) {
    let right = nums.length - 4 + left;
    min = Math.min(min, nums[right] - nums[left]);
  }

  return min;
};