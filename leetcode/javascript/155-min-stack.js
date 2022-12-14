/**
 * https://leetcode.com/problems/min-stack
 */

var MinStack = function() {
  this.stack = [];
  this.min = +Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (this.stack.length === 0) {
    this.stack.push(val);
    this.min = val;
    return;
  } 

  if (val >= this.min) {
    this.stack.push(val);
  } else {
    this.stack.push(2 * val - this.min);
    this.min = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const element = this.stack.pop();
  if (element >= this.min) {
    return element;
  } else {
    const tmp = this.min;
    this.min = 2 * this.min - element;
    return tmp;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const top = this.stack[this.stack.length - 1];
  if (top > this.min) {
    return top;
  } else {
    return this.min;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */