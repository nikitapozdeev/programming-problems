/**
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  const neighbors = [...new Array(n)].map(() => []);
  for (const [a, b] of edges) {
    neighbors[a].push(b);
    neighbors[b].push(a); 
  }

  const dfs = (node, parentNode) => {
    let totalTime = 0;
    let childTime = 0;

    for (const neighbor of neighbors[node]) {
      if (neighbor === parentNode) {
        continue;
      }

      childTime = dfs(neighbor, node);
      if (childTime || hasApple[neighbor]) {
        totalTime += childTime + 2;
      }
    }
    return totalTime;
  }  

  return dfs(0, -1);
};