/**
 * https://leetcode.com/problems/concatenation-of-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  const n = nums.length;
  const ans = Array(n * 2);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }
  return ans;
};