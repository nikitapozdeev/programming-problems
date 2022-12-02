/**
 * https://leetcode.com/problems/sort-list/
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
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  
  const mid = getMid(head);
  const left = sortList(head);
  const right = sortList(mid);
  return merge(left, right);
};

const getMid = (head) => {
  let mid = head;
  while (head && head.next && head.next.next) {
    mid = mid.next;
    head = head.next.next;
  }
  
  let result = mid.next;
  mid.next = null;
  return result;
}

const merge = (firstList, secondList) => {
  const dummy = new ListNode();
  let tail = dummy;
  
  while (firstList && secondList) {
    if (firstList.val < secondList.val) {
      tail.next = firstList;
      firstList = firstList.next;
    } else {
      tail.next = secondList;
      secondList = secondList.next;
    }
    tail = tail.next;
  }
  
  tail.next = firstList ? firstList : secondList;
  return dummy.next;
}
