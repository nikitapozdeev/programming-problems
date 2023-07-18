/**
 * https://leetcode.com/problems/lru-cache
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.left = new Node(0, 0);
  this.right = new Node(0, 0);
  
  this.left.next = this.right;
  this.right.prev = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    this.remove(node);
    this.insert(node);
    return node.value;
  }

  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }

  this.cache.set(key, new Node(key, value));
  this.insert(this.cache.get(key));

  if (this.cache.size > this.capacity) {
    const lru = this.left.next;
    this.remove(lru);
    this.cache.delete(lru.key);
  }
};

LRUCache.prototype.remove = function(node) {
  const prev = node.prev;
  const next = node.next;
  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.insert = function(node) {
  const prev = this.right.prev;
  const next = this.right;
  prev.next = node;
  next.prev = node;
  node.prev = prev;
  node.next = next;
};

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */