/**
 * https://leetcode.com/problems/design-hashset
 */

class ListNode {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

var MyHashSet = function() {
  this.hashset = new Array(10e4).fill(new ListNode());
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  const hash = key % this.hashset.length;
  let head = this.hashset[hash];
  while (head.next) {
    if (head.next.key === key) {
      return;
    }
    head = head.next;
  }
  head.next = new ListNode(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  const hash = key % this.hashset.length;
  let head = this.hashset[hash];
  while (head.next) {
    if (head.next.key === key) {
      head.next = head.next.next;
      return;
    }
    head = head.next;
  }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  const hash = key % this.hashset.length;
  let head = this.hashset[hash];
  while (head.next) {
    if (head.next.key === key) {
      return true;
    }
    head = head.next;
  }

  return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */