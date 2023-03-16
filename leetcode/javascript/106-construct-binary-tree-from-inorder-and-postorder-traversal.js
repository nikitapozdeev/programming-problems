/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const inorderMap = inorder.reduce((acc, curr, index) => {
    acc[curr] = index;
    return acc;
  }, {});

  const build = (from, to) => {
    if (from > to) {
      return null;
    }

    const root = new TreeNode(postorder.pop());

    const rootIndex = inorderMap[root.val];
    root.right = build(rootIndex + 1, to);
    root.left = build(from, rootIndex - 1);

    return root;
  }

  return build(0, inorder.length - 1);
};