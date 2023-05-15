/**
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  let slow = head;
  let fast = head;
  for (let i = 1; i < k; i++) {
    fast = fast.next;
  }

  let src = fast;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  const tmp = slow.val;
  slow.val = src.val;
  src.val = tmp;

  return head;
};