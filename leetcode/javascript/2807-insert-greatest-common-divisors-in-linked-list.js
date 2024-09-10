/**
 * https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list
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
var insertGreatestCommonDivisors = function(head) {
  let curr = head;

  while (curr.next) {
    const divisor = gcd(curr.val, curr.next.val);
    const node = new ListNode(divisor, curr.next);
    curr.next = node;
    curr = node.next;
  }

  return head;
};

const gcd = (a, b) => {
  let dividend = Math.max(a, b);
  let divider = Math.min(a, b);
  let remainder = dividend % divider;

  while (remainder !== 0) {
    dividend = divider;
    divider = remainder;
    remainder = dividend % divider;
  }

  return divider;
}