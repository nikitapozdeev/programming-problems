/**
 * https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
  const adj = {};
  const dfs = (node, prev) => {
    if (!node) {
      return;
    }

    const curr = node.val;
    if (!adj[curr]) {
      adj[curr] = [];
    }

    if (prev !== undefined) {
      adj[curr].push(prev);
    }

    if (node.left) {
      adj[curr].push(node.left.val);
      dfs(node.left, curr);
    }

    if (node.right) {
      adj[curr].push(node.right.val);
      dfs(node.right, curr);
    }
  }

  dfs(root);
  
  let max = 0;
  const queue = [[start, 0]];
  const seen = {};

  while (queue.length) {
    const [val, distance] = queue.pop();
    seen[val] = true;
    max = Math.max(max, distance);

    for (const nei of adj[val]) {
      if (!seen[nei]) {
        queue.push([nei, distance + 1]);
      }
    }
  }

  return max;
};