/**
 * https://leetcode.com/problems/sum-of-distances-in-tree
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
  const adj = new Array(n).fill().map(() => ([]));
  for (const [from, to] of edges) {
    adj[from].push(to);
    adj[to].push(from);
  }

  const count = new Array(n).fill(1);
  const length = new Array(n).fill(0);

  const dfs = (curr, prev) => {
    for (const nei of adj[curr]) {
      if (nei !== prev) {
        dfs(nei, curr);
        count[curr] += count[nei];
        length[curr] += length[nei] + count[nei];
      }
    }
  }

  const dfs2 = (curr, prev) => {
    for (const nei of adj[curr]) {
      if (nei !== prev) {
        length[nei] = length[curr] - count[nei] + count.length - count[nei];
        dfs2(nei, curr);
      }
    }
  }

  dfs(0, null);
  dfs2(0, null);

  return length;
};