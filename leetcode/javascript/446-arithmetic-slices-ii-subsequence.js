/**
 * https://leetcode.com/problems/arithmetic-slices-ii-subsequence
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  let count = 0;
  const len = nums.length;
  const dp = new Array(len).fill().map(() => ({}));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const curr = dp[i][diff] ?? 0;
      const prev = dp[j][diff] ?? 0;
      dp[i][diff] = curr + 1 + prev;
      count += prev;
    }
  }

  return count;
};