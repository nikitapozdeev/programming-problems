/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const cache = {};

  const dfs = (start, end) => {
    const trees = [];
    if (start > end) {
      trees.push(null);
      return trees;
    }

    const cacheKey = `${start}:${end}`;
    if (cacheKey in cache) {
      return cache[cacheKey];
    }
    
    for (let i = start; i <= end; i++) {
      const leftTree = dfs(start, i - 1);
      const rightTree = dfs(i + 1, end);

      for (const left of leftTree) {
        for (const right of rightTree) {
          const root = new TreeNode(i, left, right);
          trees.push(root);
        }
      } 
    }

    cache[cacheKey] = trees;
    return trees;
  }

  return dfs(1, n);
};