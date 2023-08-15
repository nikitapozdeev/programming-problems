/**
 * https://leetcode.com/problems/partition-list
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const leftDummy = new ListNode();
  const rightDummy = new ListNode();

  let leftCur = leftDummy;
  let rightCur = rightDummy;

  while (head) {
    if (head.val < x) {
      leftCur.next = new ListNode(head.val);
      leftCur = leftCur.next;
    } else {
      rightCur.next = new ListNode(head.val);
      rightCur = rightCur.next;
    }

    head = head.next;
  }

  leftCur.next = rightDummy.next;

  return leftDummy.next;
};