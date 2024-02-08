/**
 * https://leetcode.com/problems/perfect-squares
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n + 1).fill(+Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      const square = j ** 2;
      if (i - square < 0) {
        break;
      }

      dp[i] = Math.min(dp[i], 1 + dp[i - square]);
    }
  }

  return dp[n];
};