/**
 * https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
  const adj = [...new Array(n + 1)].map(() => []);
  for (const [from, to, distance] of roads) {
    adj[from].push([ to, distance ]);
    adj[to].push([ from, distance ]);
  }

  let score = +Infinity;
  const seen = {};

  const dfs = (road) => {
    if (road in seen) {
      return;
    }

    seen[road] = true;
    for (const [neighbor, distance] of adj[road]) {
      score = Math.min(score, distance);
      dfs(neighbor);
    }
  }

  dfs(1);
  return score;
};