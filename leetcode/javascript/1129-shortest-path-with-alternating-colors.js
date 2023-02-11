/**
 * https://leetcode.com/problems/shortest-path-with-alternating-colors
 */

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  if (n === 1) {
    return [0];
  }

  const adj = [...new Array(n)].map(() => []);
  for (const [from, to] of redEdges) {
    adj[from].push([to, 0]);
  }
  
  for (const [from, to] of blueEdges) {
    adj[from].push([to, 1]);
  }

  const queue = [[0, 0, null]];
  const visited = { '00': 1, '01': 1 };
  const answer = new Array(n).fill(-1);
  answer[0] = 0;

  while (queue.length > 0) {
    const [node, length, color] = queue.shift();
    for (const [neiNode, neiColor] of adj[node]) {
      if (!visited[`${neiNode}${neiColor}`] && color !== neiColor) {
        if (answer[neiNode] === -1) {
          answer[neiNode] = length + 1;
        }
        visited[`${neiNode}${neiColor}`] = 1;
        queue.push([neiNode, length + 1, neiColor]);
      }
    }
  }

  return answer
};