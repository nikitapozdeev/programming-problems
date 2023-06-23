/**
 * https://leetcode.com/problems/longest-arithmetic-subsequence
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
  let max = 0;
  const dp = new Array(nums.length).fill().map(() => ({}));
  for (let right = 1; right < nums.length; right++) {
    for (let left = 0; left < right; left++) {
      const diff = nums[right] - nums[left];
      dp[right][diff] = (dp[left][diff] || 1) + 1;
      max = Math.max(max, dp[right][diff]);
    }
  }
  return max;
};