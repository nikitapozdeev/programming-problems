/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function(head) {
  const dummy = new ListNode();
  dummy.next = head;
  
  let prev = dummy;
  while (head !== null && head.next != null) {
    prev.next = head.next; // dummy -> 2
    head.next = head.next.next; // 1 -> 3
    prev.next.next = head; // 2 -> 1
    prev = head;
    head = prev.next;
  }
  return dummy.next;
};