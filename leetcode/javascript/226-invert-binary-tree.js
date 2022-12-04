/**
 * https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  invert(root);
  return root;
};

const invert = (node) => {
  if (!node) {
    return;
  }
  
  const tmp = node.left;
  node.left = node.right;
  node.right = tmp;
  
  invert(node.left);
  invert(node.right);
}