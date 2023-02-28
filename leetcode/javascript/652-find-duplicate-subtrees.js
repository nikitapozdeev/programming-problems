/**
 * 
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
 * O(N) approach
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const answer = [];
  const seen = {};
  const triplet2id = new Map();

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const triplet = `${dfs(node.left)}${node.val}${dfs(node.right)}`;
    if (!triplet2id.has(triplet)) {
      triplet2id.set(triplet, triplet2id.size + 1);
    }

    const id = triplet2id.get(triplet);
    seen[id] = (seen[id] || 0) + 1;
    if (seen[id] === 2) {
      answer.push(node);
    }

    return id;
  }

  dfs(root);
  return answer;
};

/**
 * O(N^2) approach
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const answer = [];
  const seen = {};

  const dfs = (node) => {
    if (!node) {
      return "";
    }

    const leftStr = dfs(node.left);
    const rightStr = dfs(node.right);
    const treeStr = `(${leftStr})${node.val}(${rightStr})`;
    seen[treeStr] = (seen[treeStr] || 0) + 1;
    if (seen[treeStr] === 2) {
      answer.push(node);
    }

    return treeStr;
  }

  dfs(root);
  return answer;
};