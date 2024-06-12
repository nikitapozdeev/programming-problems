/**
 * https://leetcode.com/problems/sort-colors/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const count = new Array(3).fill(0);
  for (const n of nums) {
    count[n]++;
  }

  let color = 0;
  for (let i = 0; i < nums.length; i++) {
    while (!count[color]) {
      color++
    };
    nums[i] = color;
    count[color]--;
  }
};