/**
 * https://leetcode.com/problems/find-champion-ii
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
  const adj = {};
  for (const [a, b] of edges) {
    if (!adj[b]) {
      adj[b] = [];
    }

    adj[b].push(a);
  }

  let winner = null;

  for (let i = 0; i < n; ++i) {
    if (adj[i]) continue;
    if (winner !== null) return -1;
    winner = i;
  }

  return winner;
};