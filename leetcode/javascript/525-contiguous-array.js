/**
 * https://leetcode.com/problems/contiguous-array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const map = {};
  let zeroes = 0;
  let ones = 0;
  let max = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes++;
    } else {
      ones++;
    }

    const diff = ones - zeroes;
    if (!(diff in map)) {
      map[diff] = i;
    }

    if (ones === zeroes) {
      max = ones + zeroes;
    } else {
      max = Math.max(max, i - map[diff]);
    }
  }

  return max;
};