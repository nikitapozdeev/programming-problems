/**
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  const graph = {};
  const buildGraph = (node, parent) => {
    if (node && parent) {
      if (!graph[node.val]) {
        graph[node.val] = [];
      }
      graph[node.val].push(parent.val);

      if (!graph[parent.val]) {
        graph[parent.val] = [];
      }
      graph[parent.val].push(node.val);
    }

    if (node.left) {
      buildGraph(node.left, node);
    }

    if (node.right) {
      buildGraph(node.right, node);
    }
  }

  buildGraph(root, null);

  const seen = { [target.val]: true };
  const answer = [];

  const dfs = (value, distance) => {
    if (distance === k) {
      answer.push(value);
      return;
    }

    for (const nei of graph[value] || []) {
      if (!seen[nei]) {
        seen[nei] = true;
        dfs(nei, distance + 1);
      }
    }
  }

  dfs(target.val, 0);

  return answer;
};