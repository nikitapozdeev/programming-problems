/**
 * https://leetcode.com/problems/path-sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const traverse = (sum, node) => {
    if (!node) {
      return false;
    }

    sum += node.val;
    if (!node.left && !node.right) {
      return sum === targetSum;
    }

    return traverse(sum, node.left) || traverse(sum, node.right);
  }

  return traverse(0, root);
};