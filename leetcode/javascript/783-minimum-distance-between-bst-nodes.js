/**
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes
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
 * @return {number}
 */
var minDiffInBST = function(root) {
  let min = +Infinity;
  let prevNode = null;

  const dfs = (node) => {
    if (!node) {
      return;
    }

    dfs(node.left);
    if (prevNode) {
      min = Math.min(min, node.val - prevNode.val);
    }
    prevNode = node;
    dfs(node.right);
  }

  dfs(root, null);

  return min;
};