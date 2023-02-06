/**
 * https://leetcode.com/problems/shuffle-the-array
 */

/**
 * O(n) space complexity
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const result = [];
  for (let i = 0; i < n ; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
};

/**
 * O(1) space complexity with bit manipulation
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  for (let i = 0; i < n ; i++) {
    nums[i] = nums[i] << 10;
    nums[i] |= nums[i + n];
  }

  let right = 2 * n - 1;
  for (let left = n - 1; left >= 0; left--) {
    const y = nums[left] & (0xfff >> 2);
    const x = nums[left] >> 10;
    nums[right] = y;
    nums[right - 1] = x;
    right -= 2;
  }

  return nums;
};