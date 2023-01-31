/**
 * https://leetcode.com/problems/best-team-with-no-conflicts
 */

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
  const players = scores.map((score, index) => [score, ages[index]]);
  players.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  const dp = [...new Array(players.length)].map((_, index) => players[index][0]);
  for (let i = 0; i < players.length; i++) {
    const [maxScore, maxAge] = players[i];
    for (let j = 0; j < i; j++) {
      if (maxAge >= players[j][1]) {
        dp[i] = Math.max(dp[i], maxScore + dp[j]);
      }
    }
  }

  return dp.reduce((acc, curr) => Math.max(acc, curr), dp[0]);
};