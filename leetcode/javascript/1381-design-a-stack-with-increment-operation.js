/**
 * https://leetcode.com/problems/design-a-stack-with-increment-operation
 */

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.stack = [];
  this.maxSize = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.stack.length !== this.maxSize) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.stack.length === 0) return -1;
  return this.stack.pop();  
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  for (let i = 0; i < k && i < this.stack.length; ++i) {
    this.stack[i] += val;
  }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */