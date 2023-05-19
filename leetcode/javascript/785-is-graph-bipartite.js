/**
 * https://leetcode.com/problems/is-graph-bipartite
 */

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const group = new Array(graph.length).fill(0);
  const bfs = (i) => {
    if (group[i]) {
      return true;
    }

    const queue = [i];
    group[i] = 1;

    while (queue.length) {
      const e = queue.shift();
      for (const nei of graph[e]) {
        if (group[e] === group[nei]) {
          return false;
        }

        if (!group[nei]) {
          queue.push(nei);
          group[nei] = group[e] * -1;
        }
      }
    }

    return true;
  }

  for (let i = 0; i < graph.length; i++) {
    if (!bfs(i)) {
      return false;
    }
  }

  return true;
};