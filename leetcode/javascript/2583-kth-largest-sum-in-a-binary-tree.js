/**
 * https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree
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
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
  const queue = [root];
  const heap = new PriorityQueue({ compare: (a, b) => b - a });

  while (queue.length) {
    let sum = 0;
    const count = queue.length;

    for (let i = 0; i < count; ++i) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    heap.enqueue(sum);
  }

  if (heap.size() < k) {
    return -1;
  }

  while (--k) {
    heap.dequeue();
  }

  return heap.front();
};