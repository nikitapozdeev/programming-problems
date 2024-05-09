/**
 * https://leetcode.com/problems/maximize-happiness-of-selected-children/
 */

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
  const heap = new PriorityQueue({ compare: (a, b) => b - a });
  for (const h of happiness) {
    heap.enqueue(h);
  }

  let total = 0;
  for (let i = 0; i < k; i++) {
    total += Math.max(heap.dequeue() - i, 0);
  }

  return total;
};