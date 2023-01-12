/**
 * https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
  const answer = new Array(n);
  const neighbors = [...new Array(n)].map(() => []);
  for (const [a, b] of edges) {
    neighbors[a].push(b);
    neighbors[b].push(a);
  }

  const startCharCode = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);

  const dfs = (node, parentNode) => {
    const index = labels[node].charCodeAt(0) - startCharCode;
    const prevCount = counts[index];
    counts[index]++;

    for (const neighbor of neighbors[node]) {
      if (neighbor !== parentNode) {
        dfs(neighbor, node);
      }
    }
    
    answer[node] = counts[index] - prevCount;
  } 

  dfs(0, -1);
  return answer; 
};