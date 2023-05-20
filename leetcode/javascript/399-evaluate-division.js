/**
 * https://leetcode.com/problems/evaluate-division
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const adj = {};
  for (let i = 0; i < equations.length; i++) {
    const [src, dest] = equations[i];
    if (!adj[src]) {
      adj[src] = [];
    }
    adj[src].push([dest, values[i]]);

    if (!adj[dest]) {
      adj[dest] = [];
    }
    adj[dest].push([src, 1 / values[i]]);
  }

  const bfs = (src, dest) => {
    if (!adj[src] || !adj[dest]) {
      return -1;
    }

    const queue = [[src, 1]];
    const seen = { src: true };

    while (queue.length) {
      const [i, w] = queue.shift();
      if (i === dest) {
        return w;
      }

      for (const [nei, weight] of adj[i]) {
        if (!seen[nei]) {
          queue.push([nei, w * weight]);
          seen[nei] = true;
        }
      }
    }

    return -1;
  }

  return queries.map(([src, dest]) => bfs(src, dest));
};