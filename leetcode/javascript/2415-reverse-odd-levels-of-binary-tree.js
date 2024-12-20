/**
 * https://leetcode.com/problems/reverse-odd-levels-of-binary-tree
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
var reverseOddLevels = function(root) {
  reverse(root.left, root.right, 0);
  return root;
};

const reverse = (left, right, level) => {
  if (!left || !right) {
    return;
  };

  if (level % 2 === 0) {
    const tmp = left.val;
    left.val = right.val;
    right.val = tmp;
  }
  
  reverse(left.left, right.right, level + 1);
  reverse(left.right, right.left, level + 1);
}