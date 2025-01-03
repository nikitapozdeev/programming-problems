/**
 * https://leetcode.com/problems/number-of-ways-to-split-array
 */

/**
 * First attempt
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  const n = nums.length;
  const prefix = new Array(n);
  let splits = 0;

  for (let i = 0; i < n; ++i) {
    prefix[i] = (prefix[i - 1] || 0) + nums[i];
  }

  const total = prefix[n - 1];

  for (let i = 0; i < n - 1; ++i) {
    splits += Number(prefix[i] >= (total - prefix[i]))
  }

  return splits;
};


/**
 * Optimized approach.
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  let right = nums.reduce((acc, curr) => acc += curr, 0);
  let left = 0;
  let splits = 0;
  
  for (let i = 0; i < nums.length - 1; ++i) {
    left += nums[i];
    right -= nums[i];
    splits += Number(left >= right);
  }

  return splits;
};
