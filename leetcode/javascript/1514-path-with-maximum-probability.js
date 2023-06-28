/**
 * https://leetcode.com/problems/path-with-maximum-probability
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
  const adj = new Array(n).fill().map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    adj[from].push([to, succProb[i]]);
    adj[to].push([from, succProb[i]]);
  }

  const heap = new PriorityQueue({ compare: (a, b) => b[1] - a[1] });
  heap.enqueue([start, 1])

  const visited = new Array(n);
  while (heap.size() > 0) {
    const [node, probability] = heap.dequeue();
    if (node === end) {
      return probability;
    }

    visited[node] = true;
    for (const [nei, edgeProbability] of adj[node]) {
      if (!visited[nei]) {
        heap.enqueue([nei, probability * edgeProbability]);
      }
    }
  }

  return 0;
};