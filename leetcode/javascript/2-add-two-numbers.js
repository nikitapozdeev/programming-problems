/**
 * https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode();
  let curr = dummy;
  let acc = 0;

  while (l1 || l2 || acc) {
    const val = (l1?.val ?? 0) + (l2?.val ?? 0) + acc;
    curr.next = new ListNode(val % 10);
    acc = Math.floor(val / 10);
    curr = curr.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return dummy.next;
};