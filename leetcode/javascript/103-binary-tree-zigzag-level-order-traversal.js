/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const nodes = [];
  const queue = [];

  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    const level = [];
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);  
      }
    }

    if (nodes.length % 2 !== 0) {
      level.reverse();
    }
    nodes.push(level);
  }

  return nodes;
};