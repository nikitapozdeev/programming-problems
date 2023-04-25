/**
 * https://leetcode.com/problems/smallest-number-in-infinite-set
 */

var SmallestInfiniteSet = function() {
  this.present = new Set();
  this.minHeap = new PriorityQueue({ compare: (a, b) => a - b });
  this.current = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.minHeap.size() > 0) {
    const min = this.minHeap.dequeue();
    this.present.delete(min);
    return min;
  }

  return this.current++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  if (this.current <= num || this.present.has(num)) {
    return;
  }

  this.minHeap.enqueue(num);
  this.present.add(num);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */