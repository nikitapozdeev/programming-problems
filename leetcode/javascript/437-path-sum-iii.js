/**
 * https://leetcode.com/problems/path-sum-iii/
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let count = 0;
  const sums = { [targetSum]: 1 };
  
  const dfs = (node, sum) => {
    if (!node) {
      return;
    }
    
    sum += node.val;
    count += (sums[sum] || 0);
    
    sums[sum + targetSum] = (sums[sum + targetSum] || 0) + 1;
    dfs(node.left, sum);
    dfs(node.right, sum);
    sums[sum + targetSum] = (sums[sum + targetSum] || 0) - 1;
  }
  
  dfs(root, 0);
  return count;
};