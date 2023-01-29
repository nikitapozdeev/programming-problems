/**
 * https://leetcode.com/problems/lfu-cache
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.count = 0;
  }
}

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.countMap = new Map();
  this.listMap = new Map();
  this.lfuCount = 1;
};

LFUCache.prototype.increaseCount = function(node) {
  if (node.count > 0) {
    const set = this.countMap.get(node.count);
    set.delete(node);
    
	if (!set.size && this.lfuCount === node.count) {
      this.lfuCount++;
    }
  }

  node.count++;
  if (!this.countMap.has(node.count)) {
    this.countMap.set(node.count, new Set());
  }

  this.countMap.get(node.count).add(node);
  this.lfuCount = Math.min(this.lfuCount, node.count);
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  const node = this.listMap.get(key);
  if (node) {
    this.increaseCount(node);
	return node.value;
  }

  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this.capacity === 0) {
    return;
  }

  const isExists = this.listMap.has(key);
  if (!isExists && this.listMap.size === this.capacity) {
    const set = this.countMap.get(this.lfuCount);
	const lfu = set.values().next().value;
    set.delete(lfu);
	this.listMap.delete(lfu.key);
  }

  if (!isExists) {
    const node = new Node(key, value);
    this.listMap.set(key, node);
	this.increaseCount(node);
  } else {
	const node = this.listMap.get(key);
    node.value = value;
	this.increaseCount(node);
  }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */