/**
 * https://leetcode.com/problems/split-linked-list-in-parts
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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  let total = 0;
  let curr = head;
  while (curr) {
    total++;
    curr = curr.next;
  }

  const groupSize = Math.floor(total / k);
  const oversizedCount = total % k;
  const output = new Array(k);

  const split = (node, size) => {
    while ((size - 1) > 0 && node) {
      node = node.next;
      size--;
    }

    if (node) {
      const tmp = node.next;
      node.next = null;
      node = tmp;
    }

    return node;
  }

  curr = head;
  for (let i = 0; i < k; ++i) {
    output[i] = curr;

    let count = groupSize + Number(i < oversizedCount);
    curr = split(curr, count);
  }

  return output;
};