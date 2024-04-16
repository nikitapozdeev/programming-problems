/**
 * https://leetcode.com/problems/add-one-row-to-tree
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
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root);
  }

  const queue = [root];
  let currentDepth = 1;

  while (queue.length && currentDepth !== depth - 1) {
    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    currentDepth++;
  }

  while (queue.length) {
    const node = queue.pop();
    node.left = new TreeNode(val, node.left, null);
    node.right = new TreeNode(val, null, node.right)
  }

  return root;
};