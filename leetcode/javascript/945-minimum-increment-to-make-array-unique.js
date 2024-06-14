/**
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
  nums.sort((a, b) => a - b);

  let moves = 0;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i - 1] - nums[i] + 1;
    if (diff >= 1) {
      nums[i] += diff;
      moves += diff;
    }
  }

  return moves;
};