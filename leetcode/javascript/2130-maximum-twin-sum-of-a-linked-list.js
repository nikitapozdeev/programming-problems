/**
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list
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
 * @return {number}
 */
var pairSum = function(head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    tmp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = tmp;
  }

  let max = -Infinity;
  while (slow) {
    max = Math.max(max, prev.val + slow.val);
    prev = prev.next;
    slow = slow.next;
  }

  return max;
};