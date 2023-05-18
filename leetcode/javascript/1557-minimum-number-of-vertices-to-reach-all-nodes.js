/**
 * https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  const hasIncomingEdges = new Array(n);
  for (const [_, to] of edges) {
    hasIncomingEdges[to] = true;
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (!hasIncomingEdges[i]) {
      result.push(i);
    }
  }

  return result;
};