/**
 * https://leetcode.com/problems/validate-binary-search-tree/
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  return isValid(root, -Infinity, +Infinity);
};

var isValid = function(node, lBound, uBound) {
  if (node === null) {
    return true;
  }
  
  if (node.val <= lBound || node.val >= uBound) {
    return false;
  }
  
  return isValid(node.left, lBound, node.val) && 
    isValid(node.right, node.val, uBound);
}