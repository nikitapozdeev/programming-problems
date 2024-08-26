/**
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal
 */

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const values = [];
  
  const traverse = (node) => {
    if (!node) {
      return;
    }
    
    for (const child of node.children) {
      traverse(child);
    }

    values.push(node.val);
  }

  traverse(root);
  return values;
};