/**
 * https://leetcode.com/problems/even-odd-tree
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
var isEvenOddTree = function(root) {
  const queue = [root];
  let level = 0;

  while (queue.length) {
    const count = queue.length;
    const isEvenLevel = level % 2 === 0;
    let prevValue = isEvenLevel ? -Infinity : +Infinity;

    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      const isEvenValue = node.val % 2 == 0;

      if (isEvenLevel) {
        if (prevValue >= node.val || isEvenValue) {
          return false;
        }
      } else {
        if (prevValue <= node.val || !isEvenValue) {
          return false;
        }
      }

      prevValue = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    level++;
  }

  return true;
};