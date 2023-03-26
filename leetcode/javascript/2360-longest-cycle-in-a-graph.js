/**
 * https://leetcode.com/problems/longest-cycle-in-a-graph
 */

/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
  let cycles = -1;
  const seen = new Array(edges.length);

  const dfs = (node, distances) => {
    seen[node] = true;
    const neighbor = edges[node];
    if (neighbor === -1) {
      return;
    }

    if (!seen[neighbor]) {
      distances[neighbor] = distances[node] + 1;
      dfs(neighbor, distances);
    } else if (distances[neighbor]) {
      cycles = Math.max(cycles, distances[node] - distances[neighbor] + 1);
    }
  }

  for (let node = 0; node < edges.length; node++) {
    if (!seen[node]) {
      const distances = {[node]: 1};
      dfs(node, distances);
    }
  }

  return cycles;
};