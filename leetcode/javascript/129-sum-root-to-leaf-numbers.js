/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers
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
var sumNumbers = function(root) {
  const dfs = (node, number) => {
    if (!node) {
      return 0;
    }

    number = number * 10 + node.val;
    if (!node.left && !node.right) {
      return number;
    }

    return dfs(node.left, number) + dfs(node.right, number);
  };

  return dfs(root, 0);
};