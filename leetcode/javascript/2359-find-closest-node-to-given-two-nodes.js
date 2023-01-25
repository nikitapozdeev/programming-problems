/**
 * https://leetcode.com/problems/find-closest-node-to-given-two-nodes
 */

/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
  const edgesCount = edges.length;
  const node1Distances = {};
  const node2Distances = {};

  const dfs = (node, distances, distance) => {
    distances[node] = distance;
    if (edges[node] !== -1 && !(edges[node] in distances)) {
      dfs(edges[node], distances, distance + 1);
    }
  }

  dfs(node1, node1Distances, 0);
  dfs(node2, node2Distances, 0);

  let answer = -1;
  let minDistance = +Infinity;
  for (let i = 0; i < edgesCount; i++) {
    if (i in node1Distances && i in node2Distances) {
      const distance = Math.max(node1Distances[i], node2Distances[i]);
      if (distance < minDistance) {
        minDistance = distance;
        answer = i;
      }
    }
  }

  return answer;
};