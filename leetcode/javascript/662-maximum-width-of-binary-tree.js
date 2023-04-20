/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree
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
var widthOfBinaryTree = function(root) {
  const queue = [[root, 1n, 0]];
  let maxWidth = 0n;
  let prevNumber = 1n;
  let prevLevel = 0;

  while (queue.length) {
    const [node, number, level] = queue.shift();

    if (level > prevLevel) {
      prevLevel = level;
      prevNumber = number;
    }

    if (number - prevNumber + 1n > maxWidth) {
      maxWidth = number - prevNumber + 1n;
    }
    
    if (node.left) {
      queue.push([node.left, 2n * number, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, (2n * number) + 1n, level + 1]);
    }
  }

  return Number(maxWidth);
};