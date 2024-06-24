/**
 * https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
  let flips = 0;
  const queue = [];

  for (let i = 0; i < nums.length; ++i) {
    while (queue.length && i > queue[0] + k - 1) {
      queue.shift();
    }

    if ((nums[i] + queue.length) % 2 === 0) {
      if (i + k > nums.length) {
        return -1; 
      }

      queue.push(i);
      flips++;
    }
  }

  return flips;
};