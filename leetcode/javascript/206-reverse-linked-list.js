/**
 * https://leetcode.com/problems/reverse-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// iterative
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }
  return prev;
};
