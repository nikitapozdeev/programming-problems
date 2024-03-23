/**
 * https://leetcode.com/problems/reorder-list
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  const result = head;
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  tail = slow.next;
  let prev = slow.next = null;
  while (tail) {
    const tmp = tail.next;
    tail.next = prev;
    prev = tail;
    tail = tmp;
  }

  tail = prev;
  while (tail) {
    const tmpH = head.next;
    const tmpT = tail.next;
    head.next = tail;
    tail.next = tmpH;
    head = tmpH;
    tail = tmpT;
  }

  return result;
};