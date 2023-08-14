/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const heap = new PriorityQueue({ compare: (a, b) => a - b });
  for (const num of nums) {
    heap.enqueue(num);

    if (heap.size() > k) {
      heap.dequeue(); 
    }
  }

  return heap.front();
};