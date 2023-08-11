/**
 * https://leetcode.com/problems/coin-change-ii
 */

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = coins.length - 1; i >= 0; i--) {
    for (let j = coins[i]; j < amount + 1; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
};