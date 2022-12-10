/**
 * https://leetcode.com/problems/house-robber
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prev = 0;
  let prevPrev = 0;

  for (const num of nums) {
    const buf = Math.max(prevPrev + num, prev);
    prevPrev = prev;
    prev = buf;
  }
  return prev;
};