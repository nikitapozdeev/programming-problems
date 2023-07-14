/**
 * https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference
 */

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  const dp = {};
  let max = 1;

  for (const num of arr) {
    const prev = dp[num - difference] || 0;
    dp[num] = prev + 1;
    max = Math.max(max, dp[num]);
  }

  return max;
};