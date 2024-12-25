/**
 * https://leetcode.com/problems/find-largest-value-in-each-tree-row
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
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) {
    return [];
  }

  const max = [];
  const queue = [root];

  while (queue.length) {
    let levelMax = -Infinity;
    let size = queue.length;

    while(size--) {
      const node = queue.shift();
      levelMax = Math.max(levelMax, node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    max.push(levelMax);
  }

  return max;
};