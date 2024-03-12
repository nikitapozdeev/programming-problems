/**
 * https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list
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
var removeZeroSumSublists = function(head) {
  const dummy = new ListNode(0, head);
  let curr = dummy;
  let prefixSum = 0;
  let prefixSumMap = {};

  while (curr) {
    prefixSum += curr.val;

    if (prefixSum in prefixSumMap) {
      let prev = prefixSumMap[prefixSum];
      curr = prev.next;

      let sum = prefixSum + curr.val;
      while (sum !== prefixSum) {
        delete prefixSumMap[sum];
        curr = curr.next;
        sum += curr.val;
      }
      
      prev.next = curr.next;
    } else {
      prefixSumMap[prefixSum] = curr;
    }

    curr = curr.next;
  }

  return dummy.next;
};