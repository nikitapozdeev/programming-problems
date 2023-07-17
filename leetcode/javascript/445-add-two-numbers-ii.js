/**
 * https://leetcode.com/problems/add-two-numbers-ii
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
  const s1 = [];
  const s2 = [];
  
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  const sum = [];

  while (s1.length || s2.length) {
    const a = s1.pop() || 0;
    const b = s2.pop() || 0;
    const c = a + b + carry;

    carry = Math.floor(c / 10);
    const remainder = c % 10;
    sum.push(remainder);
  }

  if (carry > 0) {
    sum.push(carry);
  }
  
  const dummy = new ListNode();
  let curr = dummy;
  while (sum.length) {
    curr.next = new ListNode(sum.pop());
    curr = curr.next;
  }

  return dummy.next;
};