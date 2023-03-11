/**
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree
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
 * Average solution with O(N) extra space for holding list.
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }

  const buildTree = (left, right) => {
    if (left > right) {
      return null;
    }

    const mid = Math.floor(left + (right - left) / 2);
    const root = new TreeNode(list[mid]);
    root.left = buildTree(left, mid - 1);
    root.right = buildTree(mid + 1, right);
    return root;
  }

  return buildTree(0, list.length - 1);
};

/**
 * Better solution without extra space for list.
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let len = 0;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }

  const buildTree = (left, right) => {
    if (left > right) {
      return null;
    }

    const mid = Math.floor(left + (right - left) / 2);
    const leftTree = buildTree(left, mid - 1);
    const root = new TreeNode(head.val);
    head = head.next;
    const rightTree = buildTree(mid + 1, right);
    
    root.left = leftTree;
    root.right = rightTree;
    return root;
  }

  return buildTree(0, len - 1);
};