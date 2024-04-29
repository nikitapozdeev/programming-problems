/**
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let xor = 0 ^ k;
  for (const num of nums) {
    xor ^= num;
  }
  
  let count = 0;
  while (xor) {
    count += (xor & 1);
    xor >>= 1;
  }

  return count;
};