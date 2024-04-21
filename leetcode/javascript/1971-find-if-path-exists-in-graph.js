/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  const adj = {};
  const visited = {};
  
  for (const [from, to] of edges) {
    if (!adj[from]) {
      adj[from] = [];
    }

    if (!adj[to]) {
      adj[to] = [];
    }

    adj[from].push(to);
    adj[to].push(from);
  }

  const dfs = (curr) => {
    if (curr === destination) {
      return true;
    }

    if (visited[curr]) {
      return false;
    }

    visited[curr] = true;

    for (const nei of adj[curr]) {
      if (dfs(nei)) {
        return true;
      } 
    }

    return false;
  }

  return dfs(source);
};