/**
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree
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
var longestZigZag = function(root) {
  let maxLength = 0;
  const dfs = (node, isLeftNode, len) => {
    if (!node) {
      return;
    }

    maxLength = Math.max(maxLength, len);
    if (isLeftNode) {
      dfs(node.left, true, 1);
      dfs(node.right, false, len + 1);
    } else {
      dfs(node.left, true, len + 1);
      dfs(node.right, false, 1);
    }
  }

  dfs(root, true, 0);
  dfs(root, false, 0);

  return maxLength;
};