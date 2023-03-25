/**
 * https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  const adj = [...new Array(n)].map(() => []);
  for (const [from, to] of edges) {
    adj[from].push(to);
    adj[to].push(from);
  }

  let answer = 0;
  const seen = {};

  const dfs = (node) => {
    let count = 1;
    seen[node] = true;

    for (const to of adj[node]) {
      if (!seen[to]) {
        count += dfs(to);
      }
    }

    return count;
  }

  for (i = 0; i < n; i++) {
    if (!seen[i]) {
      const size = dfs(i);
      answer += size * (n - size);
    }
  }

  return Math.floor(answer / 2);
};