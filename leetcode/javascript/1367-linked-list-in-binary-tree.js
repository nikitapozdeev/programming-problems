/**
 * https://leetcode.com/problems/linked-list-in-binary-tree
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  const dfs = (treeNode, listNode) => {
    if (!listNode) {
      return true;
    }

    if (!treeNode) {
      return false;
    }

    if (listNode.val !== treeNode.val) {
      return false;
    }

    return dfs(treeNode.left, listNode.next) || dfs(treeNode.right, listNode.next);
  }

  const check = (treeNode, listNode) => {
    if (!treeNode) {
      return false;
    }

    if (dfs(treeNode, listNode)) {
      return true;
    }

    return check(treeNode.left, listNode) || check(treeNode.right, listNode);
  }

  return check(root, head);
};