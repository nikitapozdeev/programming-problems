/**
 * https://leetcode.com/problems/all-possible-full-binary-trees
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
var allPossibleFBT = function(n) {
  const cache = new Array(n);
  
  const dfs = (count) => {
    if (count % 2 === 0) {
      return [];
    }

    if (count === 1) {
      return [new TreeNode()];
    }

    if (cache[count]) {
      return cache[count];
    }

    const nodes = [];
    for (let i = 1; i < count; i += 2) {
      const leftTree = dfs(i);
      const rightTree = dfs(count - i - 1);

      for (const left of leftTree) {
        for (const right of rightTree) {
          nodes.push(new TreeNode(0, left, right));
        }
      }
    }

    cache[count] = nodes;
    return cache[count];
  }

  return dfs(n);
};