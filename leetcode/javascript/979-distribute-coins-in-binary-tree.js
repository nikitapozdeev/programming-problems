/**
 * https://leetcode.com/problems/distribute-coins-in-binary-tree/
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
var distributeCoins = function(root) {
  let moves = 0;
  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);
    const extra = left + right + node.val - 1;
    moves += Math.abs(extra);

    return extra;
  }
  dfs(root);
  return moves;
};