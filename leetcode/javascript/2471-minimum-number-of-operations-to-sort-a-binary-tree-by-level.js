/**
 * https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level
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
var minimumOperations = function(root) {
  const queue = [root];
  let swaps = 0;

  const getSwapsCount = (level) => {
    const sortedLevel = [...level].sort((a, b) => a - b);
    const positions = {};

    for (let i = 0; i < level.length; i++) {
      positions[level[i]] = i; 
    }

    let count = 0;
    
    for (let i = 0; i < level.length; ++i) {
      if (level[i] !== sortedLevel[i]) {
        count++;

        const sortedPosition = positions[sortedLevel[i]];
        positions[level[i]] = sortedPosition;
        level[sortedPosition] = level[i];
      }
    }

    return count;
  }

  while (queue.length) {
    const size = queue.length;
    const level = new Array(size);
    
    for (let i = 0; i < size; ++i) {
      const node = queue.shift();
      level[i] = node.val;
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    swaps += getSwapsCount(level);
  }

  return swaps;
};