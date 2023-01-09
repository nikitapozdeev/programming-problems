/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  return iterative(root);
};

const recursive = (root) => {
  const answer = [];

  const traverse = (node) => {
    if (!node) { 
      return;
    }

    answer.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return answer;
}

const iterative = (root) => {
  if (!root) {
    return [];
  }

  const answer = [];
  const stack = [root];
  
  while (stack.length > 0) {
    const node = stack.pop();
    answer.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return answer;
}