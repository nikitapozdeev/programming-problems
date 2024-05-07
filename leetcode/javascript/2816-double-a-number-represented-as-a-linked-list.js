/**
 * https://leetcode.com/problems/double-a-number-represented-as-a-linked-list
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
var doubleIt = function(head) {
  let reversedHead = reverse(head);
  
  let carry = 0;
  let curr = reversedHead;
  let prev = null;

  while (curr) {
    const val = curr.val * 2 + carry;
    curr.val = val % 10;
    carry = Boolean(val > 9);
    prev = curr;
    curr = curr.next;
  }

  if (carry > 0) {
    prev.next = new ListNode(carry);
  }

  return reverse(reversedHead);
};

const reverse = (head) => {
  let prev = null;

  while (head) {
    const tmp = head.next;
    head.next = prev;
    prev = head;
    head = tmp;
  }

  return prev;
}