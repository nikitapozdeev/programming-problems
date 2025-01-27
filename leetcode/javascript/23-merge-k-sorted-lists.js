/**
 * https://leetcode.com/problems/merge-k-sorted-lists
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) {
    return null;
  }

  while (lists.length > 1) {
    const merged = [];
    for (let i = 0; i < lists.length; i += 2) {
      merged.push(merge(lists[i], lists[i + 1]));
    }
    lists = merged;
  }

  return lists[0];
};

const merge = (listA, listB) => {
  const dummy = new ListNode();
  let curr = dummy;

  while (listA && listB) {
    if (listA.val < listB.val) {
      curr.next = listA;
      listA = listA.next;
    } else {
      curr.next = listB;
      listB = listB.next;
    }
    curr = curr.next;
  }

  if (listA) {
    curr.next = listA;
  }

  if (listB) {
    curr.next = listB;
  }

  return dummy.next;
}