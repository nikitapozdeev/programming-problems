/**
 * https://leetcode.com/problems/merge-in-between-linked-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  const dummy = new ListNode(0, list1);
  for (let i = 1; i < a; i++) {
    list1 = list1.next;
  }

  let start = list1;
  for (let i = a; i <= b; i++) {
    list1 = list1.next;
  }

  start.next = list2;
  while (list2.next) {
    list2 = list2.next;
  }
  list2.next = list1.next;

  return dummy.next;
};