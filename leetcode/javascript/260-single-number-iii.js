/**
 * https://leetcode.com/problems/single-number-iii
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let xor = 0;
  for (const num of nums) {
    xor ^= num;
  }

  let bit = 1;
  while (!(xor & bit)) {
    bit <<= 1;
  }

  let a = 0;
  let b = 0;
  for (const num of nums) {
    if (num & bit) {
      a ^= num;
    } else {
      b ^= num;
    }
  }

  return [a, b];
};