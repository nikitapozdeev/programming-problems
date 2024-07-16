/**
 * https://leetcode.com/problems/create-binary-tree-from-descriptions
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
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  const map = {};
  const children = new Set();

  for (const [parent, child, isLeft] of descriptions) {
    if (!map[parent]) {
      map[parent] = new TreeNode(parent);
    }

    if (!map[child]) {
      map[child] = new TreeNode(child);
    }

    if (isLeft) {
      map[parent].left = map[child];
    } else {
      map[parent].right = map[child];
    }

    children.add(map[child]);
  }

  for (const node of Object.values(map)) {
    if (!children.has(node)) {
      return node;
    }
  }

  return null;
};