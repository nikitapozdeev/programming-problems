/**
 * https://leetcode.com/problems/maximum-width-ramp/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  const stack = [];
  let maxWidth = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (!stack.length || (nums[stack[stack.length - 1]] > nums[i])) {
      stack.push(i);
    }
  }

  for (let i = nums.length - 1; i >= 0; --i) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      maxWidth = Math.max(maxWidth, i - stack[stack.length - 1]);
      stack.pop();
    }
  }

  return maxWidth;
};