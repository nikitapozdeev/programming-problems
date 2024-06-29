/**
 * https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
  const adj = {};
  for (const [from, to] of edges) {
    if (!adj[to]) adj[to] = [];
    adj[to].push(from);
  }

  const dfs = (i, visited) => {
    visited[i] = true;
    if (!adj[i]) return;
    for (const nei of adj[i]) {
      if (!visited[nei]) {
        dfs(nei, visited);
      }
    }
  }

  const answer = new Array(n).fill([]);
  for (let i = 0; i < n; ++i) {
    const ancestors = [];
    const visited = {};
    dfs(i, visited);

    for (let j = 0; j < n; ++j) {
      if (j === i) continue;
      if (j in visited) {
        ancestors.push(j);
      }
    }

    answer[i] = ancestors;
  }

  return answer;
};