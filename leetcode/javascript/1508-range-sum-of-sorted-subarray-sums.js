/**
 * https://leetcode.com/problems/range-sum-of-sorted-subarray-sums
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const arr = [];
  const mod = 1e9 + 7;

  for (let i = 0; i < n; ++i) {
    let sum = 0;
    for (let j = i; j < n; ++j) {
      sum = (sum + nums[j]) % mod;
      arr.push(sum);
    }
  }

  arr.sort((a, b) => a - b);
  
  let sum = 0;
  for (let l = left - 1; l < right; ++l) {
    sum = (sum + arr[l]) % mod;
  }

  return sum;
};