/**
 * https://leetcode.com/problems/cousins-in-binary-tree-ii
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
var replaceValueInTree = function(root) {
  const dummy = new TreeNode(root.val, root);
  const queue = [[root, dummy]];

  while (queue.length) {
    const count = queue.length;
    let levelSum = 0;

    for (let i = 0; i < count; ++i) {
      const [node] = queue[i];
      levelSum += node.val; 
    }

    let tmp = 0;
    let prevParent = null;

    for (let i = 0; i < count; ++i) {
      const [node, parent] = queue.shift();

      if (parent !== prevParent) {
        tmp = 0;
      }
      
      const left = tmp || parent.left?.val || 0;
      const right = parent.right?.val || 0;
      node.val = levelSum - left - right;

      tmp = left;
      prevParent = parent;

      if (node.left) {
        queue.push([node.left, node]);
      }

      if (node.right) {
        queue.push([node.right, node]);
      }
    }
  }

  return root;
};