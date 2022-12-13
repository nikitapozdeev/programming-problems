/**
 * https://leetcode.com/problems/binary-tree-right-side-view
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
var rightSideView = function(root) {
  if (!root) {
    return [];
  }

  const answer = [];
  const queue = [root];

  while (queue.length > 0) {
    const steps = queue.length;
    answer.push(queue[steps - 1].val);
    for (i = 0; i < steps; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return answer;
};