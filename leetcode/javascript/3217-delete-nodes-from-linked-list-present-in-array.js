/**
 * https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
  const set = new Set(nums);
  const dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  while (head) {
    if (set.has(head.val)) {
      prev.next = head.next;
    } else {
      prev = head;
    }
    head = head.next;
  }

  return dummy.next;
};