/**
 * https://leetcode.com/problems/merge-nodes-in-between-zeros
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
 * @return {ListNode}
 */
var mergeNodes = function(head) {
  const dummy = new ListNode();
  dummy.next = head;

  let lastZero = dummy;
  let curr = head.next;
  let sum = 0;
  while (curr) {
    sum += curr.val;
    if (!curr.val) {
      lastZero.next = curr;
      lastZero = curr;
      curr.val = sum;
      sum = 0;
    }
    curr = curr.next;
  }

  return dummy.next;
};