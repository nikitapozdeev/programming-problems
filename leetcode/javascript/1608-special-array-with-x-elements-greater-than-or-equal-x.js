/**
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  const frequency = new Array(nums.length + 1).fill(0);
  for (const num of nums) {
    frequency[Math.min(num, nums.length)]++;
  }

  let right = 0;
  for (let i = frequency.length - 1; i >= 0; i--) {
    right += frequency[i];
    if (i === right) {
      return right;
    }
  }

  return -1;
};