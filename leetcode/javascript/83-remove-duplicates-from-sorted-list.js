/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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
var deleteDuplicates = function(head) {
  const dummy = new ListNode();
  let tail = dummy;
  while (head !== null) {
    if (head.next === null || head.val !== head.next.val) {
      tail.next = head;
      tail = tail.next;
    }
    head = head.next;
  }
  return dummy.next;
};