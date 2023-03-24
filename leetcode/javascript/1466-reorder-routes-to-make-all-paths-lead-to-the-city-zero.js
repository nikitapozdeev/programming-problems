/**
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  const adj = [...new Array(n)].map(() => []);
  for (const [from, to] of connections) {
    adj[from].push([to, 1]);
    adj[to].push([from, 0]);
  }

  let count = 0;
  const dfs = (city, prevCity) => {
    for (const [to, direction] of adj[city]) {
      if (to !== prevCity) {
        count += direction;
        dfs(to, city);
      }
    }
  }

  dfs(0, -1);
  return count;
};