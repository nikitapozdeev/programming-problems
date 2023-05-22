/**
 * https://leetcode.com/problems/top-k-frequent-elements
 */

/**
 * Straightforward solution O(N log N)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  return Object.keys(count)
    .sort((a, b) => count[b] - count[a])
    .slice(0, k);
};

/**
 * Heap solution O(N log k)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  if (nums.length === k) {
    return nums;
  }

  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  const heap = new PriorityQueue({ compare: (a, b) => count[a] - count[b] });
  for (const key of Object.keys(count)) {
    heap.enqueue(key);
    if (heap.size() > k) {
      heap.dequeue();
    }
  }

  return Array.from({ length: k }, () => heap.dequeue());
};