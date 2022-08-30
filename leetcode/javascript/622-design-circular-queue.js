/**
 * https://leetcode.com/problems/design-circular-queue/
 */

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.items = new Array(k);
  this.start = -1;
  this.end = -1;
  this.capacity = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
    return false;
  }
  
  if (this.isEmpty()) {
    this.start = 0;
    this.end = 0;
  } else {   
    this.end = (this.end + 1) % this.capacity;
  }
  
  this.items[this.end] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false;
  }
  
  if (this.start === this.end) {
    this.start = -1;
    this.end = -1;
  } else {
    this.start = (this.start + 1) % this.capacity;
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
    return -1;
  }
  return this.items[this.start];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
    return -1;
  }
  return this.items[this.end];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.start === -1 && this.end === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return ((this.end + 1) % this.capacity) === this.start;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */