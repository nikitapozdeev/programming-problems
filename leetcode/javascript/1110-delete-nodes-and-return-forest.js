/**
 * https://leetcode.com/problems/delete-nodes-and-return-forest
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  const roots = [];
  to_delete = new Set(to_delete);
  
  const deleteNode = (node) => {
    if (!node) return null;
    
    node.left = deleteNode(node.left);
    node.right = deleteNode(node.right);

    if (to_delete.has(node.val)) {
      if (node.left) {
        roots.push(node.left);
      }

      if (node.right) {
        roots.push(node.right);
      }
      
      return null;
    }

    return node;
  }

  root = deleteNode(root);
  if (root) {
    roots.push(root);
  }

  return roots;
};