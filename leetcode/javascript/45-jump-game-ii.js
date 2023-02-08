/**
 * https://leetcode.com/problems/jump-game-ii
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let left = 0;
  let right = 0;
  let jumps = 0;

  while (right < nums.length - 1) {
    let max = left + nums[left];
    for (i = left + 1; i <= right; i++) {
      max = Math.max(max, i + nums[i]);
    }
    left = right + 1;
    right = max;
    jumps++;
  }

  return jumps;
};