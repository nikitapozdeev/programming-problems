/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = new PriorityQueue({ compare: (a, b) => a - b });
  for (const num of nums) {
    this.heap.enqueue(num);
  }

  while (this.heap.size() > k) {
    this.heap.dequeue();
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.heap.enqueue(val);
  if (this.heap.size() > this.k) {
    this.heap.dequeue();
  }
  return this.heap.front();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */