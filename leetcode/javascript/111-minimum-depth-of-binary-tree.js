/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree
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
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  
  if (!root.left && !root.right) {
    return 1;
  }

  const minLeft = root.left ? minDepth(root.left) : +Infinity;
  const minRight = root.right ? minDepth(root.right) : +Infinity;
  return 1 + Math.min(minLeft, minRight)
};