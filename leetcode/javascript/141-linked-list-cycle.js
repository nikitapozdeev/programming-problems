/**
 * https://leetcode.com/problems/linked-list-cycle/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) {
    return false;
  }
  
  let slow = head;
  let fast = head.next;
  
  while (true) {
    if (fast === null || fast.next === null || fast.next.next === null) {
      return false;
    }
    
    if (slow === fast) {
      break;
    }
    
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};