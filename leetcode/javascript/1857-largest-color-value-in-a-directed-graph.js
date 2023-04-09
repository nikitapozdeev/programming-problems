/**
 * https://leetcode.com/problems/largest-color-value-in-a-directed-graph
 */

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
  const nodesCount = colors.length;
  const seen = new Array(nodesCount);
  const path = new Array(nodesCount);
  const cache = [...new Array(nodesCount)].map(() => new Array(26).fill(0));
  const colorOffset = 'a'.charCodeAt(0);
  const adj = [...new Array(nodesCount)].map(() => []);
  for (const [from, to] of edges) {
    adj[from].push(to);
  }

  const dfs = (node) => {
    if (path[node]) {
      return +Infinity;
    }

    if (seen[node]) {
      return 0;
    }

    path[node] = true;
    seen[node] = true;

    const color = colors.charCodeAt(node) - colorOffset;
    cache[node][color] = 1;

    for (const nei of adj[node]) {
      if (dfs(nei) === +Infinity) {
        return +Infinity;
      }

      for (i = 0; i < 26; i++) {
        cache[node][i] = Math.max(cache[node][i], cache[nei][i] + Number(color === i));
      }
    }

    path[node] = null;
    return Math.max(...cache[node]);
  }

  let largestColor = 0;
  for (let node = 0; node < nodesCount; node++) {
    largestColor = Math.max(largestColor, dfs(node));
  }

  return largestColor === +Infinity ? -1 : largestColor;
};