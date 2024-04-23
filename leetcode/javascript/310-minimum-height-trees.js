/**
 * https://leetcode.com/problems/minimum-height-trees/
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 1) {
    return [0];
  }

  const adj = new Array(n).fill().map(() => ([]));
  for (const [from, to] of edges) {
    adj[from].push(to);
    adj[to].push(from);
  }
  
  const neighborsCounter = {};
  const queue = [];
  for (let node = 0; node < n; node++) {
    neighborsCounter[node] = adj[node].length;
    if (neighborsCounter[node] === 1) {
      queue.push(node);
    }
  }

  while (queue.length && n > 2) {
    const steps = queue.length;

    for (let i = 0; i < steps; i++) {
      const node = queue.shift();
      n--;

      for (const nei of adj[node]) {
        neighborsCounter[nei]--;
        if (neighborsCounter[nei] === 1) {
          queue.push(nei);
        }
      }
    }
  }

  return queue;
};