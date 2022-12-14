/**
 * https://leetcode.com/problems/implement-queue-using-stacks
 */


var MyQueue = function() {
  this.stackA = [];
  this.stackB = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackA.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stackB.length === 0) {
    while (this.stackA.length > 0) {
      this.stackB.push(this.stackA.pop());
    }
  }

  return this.stackB.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.stackB.length > 0) {
    return this.stackB[this.stackB.length - 1];
  }
  
  return this.stackA[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stackA.length === 0 && this.stackB.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */