/**
 * https://leetcode.com/problems/maximal-network-rank
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
  const adj = new Array(n).fill().map(() => new Set());
  for (const [from, to] of roads) {
    adj[from].add(to);
    adj[to].add(from);
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let count = adj[i].size + adj[j].size;
      if (adj[i].has(j) || adj[j].has(i)) {
        count--;
      }

      max = Math.max(max, count);
    }
  }

  return max;
};