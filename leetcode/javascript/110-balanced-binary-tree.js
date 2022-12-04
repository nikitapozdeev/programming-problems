/**
 * https://leetcode.com/problems/balanced-binary-tree/
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
var isBalanced = function(root) {
  return dfs(root)[0];
};

const dfs = (root) => {
  if (!root) {
    return [true, 0];
  }
  
  const [isLeftBalanced, leftHeight] = dfs(root.left);
  const [isRightBalanced, rightHeight] = dfs(root.right);
  const isBalanced = isLeftBalanced && isRightBalanced && Math.abs(leftHeight - rightHeight) <= 1;
  return [isBalanced, 1 + Math.max(leftHeight, rightHeight)];
}