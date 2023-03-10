/**
 * https://leetcode.com/problems/linked-list-random-node
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
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let index = 1;
  let value = 0;
  let curr = this.head;

  while (curr) {
    if (Math.random() < (1 / index)) {
      value = curr.val;
    }
    index++;
    curr = curr.next;
  }

  return value;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */