/**
 * https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points
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
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
  let minD = +Infinity;
  let maxD = -Infinity;
  let firstCriticalIndex = 0
  let prevCriticalIndex = 0;
  let currIndex = 1;
  let curr = head.next;
  let prev = head;

  while (curr.next) {
    if ((curr.val < prev.val && curr.val < curr.next.val) || (curr.val > prev.val && curr.val > curr.next.val)) {
      if (!prevCriticalIndex) {
        prevCriticalIndex = currIndex;
        firstCriticalIndex = currIndex;
      } else {
        minD = Math.min(minD, currIndex - prevCriticalIndex);
        prevCriticalIndex = currIndex;
      }
    } 
    currIndex++;
    prev = curr;
    curr = curr.next;
  }

  if (!Number.isFinite(minD)) {
    return [-1, -1];
  }

  return [minD, prevCriticalIndex - firstCriticalIndex];
};