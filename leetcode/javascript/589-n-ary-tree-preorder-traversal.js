/**
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Recursive solution
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  const result = [];
  return traverse(root, result);
};
  
const traverse = (node, result) => {
  if (node === null) {
    return result;
  }
  
  result.push(node.val);
  for (const child of node.children) {
    traverse(child, result);
  }
  
  return result;
}

/**
 * TODO: Iterative solution
 */