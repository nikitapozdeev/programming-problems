/**
 * https://leetcode.com/problems/longest-ideal-subsequence
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
  const dp = new Array(26).fill(0);
  const offset = 'a'.charCodeAt(0);
  let maxLength = 0;

  for (const char of s) {
    const curr = char.charCodeAt(0) - offset;
    let localMax = 1;

    for (let prev = 0; prev < 26; prev++) {
      const diff = Math.abs(curr - prev);
      if (diff <= k) {
        localMax = Math.max(localMax, 1 + dp[prev]);
      }
    }

    dp[curr] = Math.max(dp[curr], localMax);
    maxLength = Math.max(maxLength, dp[curr]);
  }

  return maxLength;
};