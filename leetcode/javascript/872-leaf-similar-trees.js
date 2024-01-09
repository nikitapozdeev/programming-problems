/**
 * https://leetcode.com/problems/leaf-similar-trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const dfs = (node, leaves) => {
    if (!node) {
      return leaves;
    }

    if (!node.left && !node.right) {
      leaves.push(node.val);
    }

    dfs(node.left, leaves);
    dfs(node.right, leaves);
  }

  const l1 = [];
  const l2 = [];
  dfs(root1, l1);
  dfs(root2, l2);
  
  return l1.length === l2.length && l1.every((x, index) => x === l2[index]);
};