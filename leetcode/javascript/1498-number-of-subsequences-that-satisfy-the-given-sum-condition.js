/**
 * https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0n;
  let right = nums.length - 1;
  const mod = BigInt(1e9 + 7);

  for (let left = 0; left < nums.length; left++) {
    while (nums[left] + nums[right] > target && left <= right) {
      right--;
    }

    if (left <= right) {
      count += 2n ** BigInt(right - left);
      count %= BigInt(1e9 + 7);
    }
  }

  return Number(count);
};