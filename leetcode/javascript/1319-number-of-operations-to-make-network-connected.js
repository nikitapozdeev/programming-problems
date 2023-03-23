/**
 * https://leetcode.com/problems/number-of-operations-to-make-network-connected
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) {
    return -1;
  }

  const adj = [...new Array(n)].map(() => []);
  for (const [from, to] of connections) {
    adj[from].push(to);
    adj[to].push(from);
  }
  
  let connected = 0;
  const seen = {};
  const dfs = (computer) => {
    seen[computer] = true;
    for (const to of adj[computer]) {
      if (!seen[to]) {
        dfs(to);
      }
    }
  }
  
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      connected++;
      dfs(i);
    }
  }

  return connected - 1;
};