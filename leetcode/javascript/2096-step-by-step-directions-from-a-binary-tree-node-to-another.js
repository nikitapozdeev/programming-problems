/**
 * https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another
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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
  const getLCA = (node, valA, valB) => {
    if (!node) return null;
    if (node.val === valA || node.val === valB) {
      return node;
    }
    
    let left = getLCA(node.left, valA, valB);
    let right = getLCA(node.right, valA, valB);

    if (!left) {
      return right;
    } else if (!right) {
      return left;
    } else {
      return node;
    }
  }

  getPath = (node, value, path = []) => {
    if (!node) return [];
    if (node.val === value) return path;

    path.push('L');
    if (getPath(node.left, value, path).length) {
      return path;
    }
    path.pop();

    path.push('R');
    if (getPath(node.right, value, path).length) {
      return path;
    }
    path.pop();

    return [];
  }

  const lca = getLCA(root, startValue, destValue);
  const startPath = getPath(lca, startValue);
  const destPath = getPath(lca, destValue);

  const directions = [
    ...new Array(startPath.length).fill('U'),
    ...destPath
  ];

  return directions.join('');
};