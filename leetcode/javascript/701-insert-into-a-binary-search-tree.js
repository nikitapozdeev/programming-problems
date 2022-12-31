/**
 * https://leetcode.com/problems/insert-into-a-binary-search-tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  const insert = (node) => {
    if (!node) {
      return;
    }

    if (!node.left && val < node.val) {
      node.left = new TreeNode(val);
      return;
    }

    if (!node.right && val > node.val) {
      node.right = new TreeNode(val);
      return;
    }
    
    if (val < node.val) {
      insertIntoBST(node.left, val);
    } else {
      insertIntoBST(node.right, val);
    }
  }
  
  insert(root);
  return root;
};