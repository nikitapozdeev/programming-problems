/**
 * https://leetcode.com/problems/remove-nodes-from-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Double reverse.
 * Time: O(n)
 * Memory: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
  head = reverse(head);

  let prev = head;
  let curr = head.next;

  while (curr) {
    if (prev.val > curr.val) {
      const tmp = curr.next;
      curr = prev;
      curr.next = tmp;
    }
    prev = curr;
    curr = prev.next;
  }

  return reverse(head);
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

/**
 * Stack solution
 * Time: O(n)
 * Memory: O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
  const stack = [];

  let curr = head;
  while (curr) {
    stack.push(curr);
    curr = curr.next;
  }

  let prev = stack.pop();
  while (stack.length) {
    const curr = stack.pop();
    if (prev.val > curr.val) {
      continue;
    }

    curr.next = prev;
    prev = curr;
  }

  return prev;
};