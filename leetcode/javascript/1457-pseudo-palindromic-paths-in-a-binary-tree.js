/**
 * https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree
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
var pseudoPalindromicPaths  = function(root) {
  const count = {};

  const isPalindrome = () => {
    let odds = 0;
    for (const value of Object.values(count)) {
      if (value !== 0 && value % 2 !== 0) {
        odds++;
        if (odds > 1) {
          return false;
        }
      } 
    }
    return true;
  }

  let paths = 0;
  const dfs = (node) => {
    count[node.val] = (count[node.val] || 0) + 1;
    if (!node.left && !node.right) {
      paths += Number(isPalindrome());
      return;
    }

    if (node.left) {
      dfs(node.left);
      count[node.left.val]--;
    }
    
    if (node.right) {
      dfs(node.right);
      count[node.right.val]--;
    }
  }

  dfs(root);
  return paths;
};