/**
 * https://leetcode.com/problems/smallest-string-starting-from-leaf
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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  let smallestStr = '';
  const charOffset = 'a'.charCodeAt(0);

  const dfs = (node, currentStr) => {
    if (!node) {
      return;
    }

    currentStr = String.fromCharCode(node.val + charOffset) + currentStr;
    if (!node.left && !node.right) {
      if (!smallestStr || currentStr < smallestStr) {
        smallestStr = currentStr;
        return;
      }
    }

    dfs(node.left, currentStr);
    dfs(node.right, currentStr);
  }

  dfs(root, "");
  return smallestStr;
};