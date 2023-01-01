/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const remainders = {};
  const find = (node) => {
    if (!node) {
      return false;
    }

    const remainder = k - node.val;
    if (node.val in remainders) {
      return true;
    }
    remainders[remainder] = 1;

    return find(node.left) || find(node.right);
  }
  return find(root);
};