/**
 * https://leetcode.com/problems/balance-a-binary-search-tree
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
var balanceBST = function(root) {  
  const inorder = (node, values = []) => {
    if (!node) return;

    inorder(node.left, values);
    values.push(node.val);
    inorder(node.right, values);
    
    return values;
  }
  
  const createBalancedBST = (values, start, end) => {
    if (start > end) return null;

    const mid = Math.floor(start + (end - start) / 2);
    const left = createBalancedBST(values, start, mid - 1);
    const right = createBalancedBST(values, mid + 1, end);
    
    return new TreeNode(values[mid], left, right);
  }

  const values = inorder(root);
  return createBalancedBST(values, 0, values.length - 1);
};